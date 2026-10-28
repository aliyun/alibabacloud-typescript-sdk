// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowTurns extends $dara.Model {
  /**
   * @remarks
   * The average number of generation rounds.
   * 
   * @example
   * 1.9
   */
  avg?: number;
  /**
   * @remarks
   * The number of traces included in the statistics.
   * 
   * @example
   * 96
   */
  count?: number;
  /**
   * @remarks
   * The maximum number of generation rounds.
   * 
   * @example
   * 9.2
   */
  max?: number;
  /**
   * @remarks
   * The P50 of generation rounds.
   * 
   * @example
   * 0.8
   */
  p50?: number;
  /**
   * @remarks
   * The P90 of generation rounds.
   * 
   * @example
   * 5.9
   */
  p90?: number;
  static names(): { [key: string]: string } {
    return {
      avg: 'Avg',
      count: 'Count',
      max: 'Max',
      p50: 'P50',
      p90: 'P90',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avg: 'number',
      count: 'number',
      max: 'number',
      p50: 'number',
      p90: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

