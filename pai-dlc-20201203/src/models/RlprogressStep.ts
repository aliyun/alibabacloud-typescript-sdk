// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressStep extends $dara.Model {
  /**
   * @remarks
   * The current step.
   * 
   * @example
   * 3
   */
  current?: number;
  /**
   * @remarks
   * The estimated time remaining, in seconds. This value is not provided when it cannot be estimated. A value of 0 may be returned when the training is confirmed to be complete, even if PaceSec is not provided.
   * 
   * @example
   * 0
   */
  etaSec?: number;
  /**
   * @remarks
   * The average time per step over the recent step progress, in seconds. This value is not provided when there is insufficient information.
   * 
   * @example
   * 14
   */
  paceSec?: number;
  /**
   * @remarks
   * The training progress percentage. A value of 100% may be returned for confirmed completed progress, where Current may be less than Total. Do not determine whether the training is complete based solely on the current step number.
   * 
   * @example
   * 100
   */
  pct?: number;
  /**
   * @remarks
   * The timestamp of the latest step (in UNIX seconds).
   * 
   * @example
   * 1787474487
   */
  time?: number;
  /**
   * @remarks
   * The total number of steps (retrieved from the configuration dump).
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      etaSec: 'EtaSec',
      paceSec: 'PaceSec',
      pct: 'Pct',
      time: 'Time',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      etaSec: 'number',
      paceSec: 'number',
      pct: 'number',
      time: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

