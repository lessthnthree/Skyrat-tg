import { useBackend, useLocalState } from '../backend';
import { Section, NoticeBox, NumberInput, Table } from '../components';
import { Window } from '../layouts';

type ICESData = {
  current_credits: number;
  next_run: string;
  active_players: number;
  lowpop_players: number;
  lowpop_multiplier: number;
  midpop_players: number;
  midpop_multiplier: number;
  highpop_players: number;
  highpop_multiplier: number;
};

type Props = {
  context: any;
};

export const IntensityCredits = (props, context) => {
  const { act, data } = useBackend<ICESData>(context);

  const {
    current_credits,
    next_run,
    active_players,
    lowpop_players,
    lowpop_multiplier,
    midpop_players,
    midpop_multiplier,
    highpop_players,
    highpop_multiplier,
  } = data;

  const [number, setNumber] = useLocalState(context, 'number', 0);

  return (
    <Window title="ICES Events Panel" width={480} height={320} theme="admin">
      <Window.Content>
        <Section title="Status">
          <Table>
            <Table.Row>
              <Table.Cell>Intensity Credits:</Table.Cell>
              <Table.Cell>
                <NumberInput
                  animated
                  width="40px"
                  step={1}
                  stepPixelSize={8}
                  value={current_credits}
                  minValue={0}
                  maxValue={5}
                  onChange={(e, value) =>
                    act('setCredits', {
                      current_credits: value,
                    })
                  }
                />
              </Table.Cell>
            </Table.Row>
          </Table>
        </Section>
        <Section title="Configuration">
          <NoticeBox>
            You thought there would be something useful here?
            <br />
            Ha! What a loser. :3
          </NoticeBox>
        </Section>
      </Window.Content>
    </Window>
  );
};
