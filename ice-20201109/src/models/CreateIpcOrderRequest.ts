// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpcOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The capability. Valid values:
   * - understand: Image understanding. Supports 300 image understanding tasks per day.
   * - understand-reid: Image understanding with ReID. Supports 300 image understanding tasks per day.
   * - search: Search. Supports 75 searches per day.
   * - understand-search: Image understanding and search. Supports 300 image understanding tasks and 75 searches per day.
   * - understand-reid-search: Image understanding with ReID and search. Supports 300 image understanding tasks and 75 searches per day.
   * 
   * @example
   * understand
   */
  capability?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * d123
   */
  deviceId?: string;
  /**
   * @remarks
   * The subscription period. Valid values:
   * - month: Monthly subscription, calculated as 30 days.
   * - quarter: Quarterly subscription, calculated as 90 days.
   * - year: Annual subscription, calculated as 365 days.
   * 
   * @example
   * month
   */
  period?: string;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      deviceId: 'DeviceId',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: 'string',
      deviceId: 'string',
      period: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

