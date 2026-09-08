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
   * The estimated remaining seconds, calculated as (Total - Current) × PaceSec.
   * 
   * @example
   * 0
   */
  etaSec?: number;
  /**
   * @remarks
   * The per-step duration, calculated as the differential between contiguous step marks, in seconds.
   * 
   * @example
   * 14
   */
  paceSec?: number;
  /**
   * @remarks
   * The progress percentage, which is the ratio of Current to Total.
   * 
   * @example
   * 100
   */
  pct?: number;
  /**
   * @remarks
   * The latest step mark time, in UNIX seconds.
   * 
   * @example
   * 1787474487
   */
  time?: number;
  /**
   * @remarks
   * The total number of steps, obtained from the configuration dump.
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

