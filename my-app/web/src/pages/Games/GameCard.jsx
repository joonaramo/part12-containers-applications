import { Card } from '../../components/Card';
import { format } from 'date-fns';
import { useState } from 'react';
import { PredictionForm } from './PredictionForm';
import { useGetTeamName } from '../../hooks/useGetTeamName';

export const GameCard = ({ game }) => {
  const [showPredictionForm, setShowPredictionForm] = useState(false);
  const homeTeamName = useGetTeamName(game.homeTeam.teamId);
  const awayTeamName = useGetTeamName(game.awayTeam.teamId);

  return (
    <li>
      <Card>
        <div className='w-full p-6'>
          <div className='w-full flex items-center justify-center space-x-3'>
            <h3 className='flex justify-end text-gray-900 text-sm font-medium w-1/3'>
              {homeTeamName}
            </h3>
            <span className='flex justify-center text-gray-900 text-sm font-medium w-1/3'>
              {format(new Date(game.start), 'HH:mm')}
            </span>
            <h3 className='flex justify-start text-gray-900 text-sm font-medium w-1/3'>
              {awayTeamName}
            </h3>
          </div>
        </div>
        <div>
          <div className='-mt-px flex divide-x divide-gray-200'>
            <div className='flex-1 flex justify-center w-full p-4'>
              {showPredictionForm ? (
                <PredictionForm
                  onSuccess={() => setShowPredictionForm(false)}
                  setShowPredictionForm={setShowPredictionForm}
                  homeTeamName={homeTeamName}
                  awayTeamName={awayTeamName}
                  gameId={game.id}
                  season={game.season}
                />
              ) : (
                <button
                  onClick={() => setShowPredictionForm(true)}
                  className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
                >
                  <span className='ml-3'>Make a prediction</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};
