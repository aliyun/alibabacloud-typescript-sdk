// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpcOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The capability. Valid values:
   * 
   * - understand: Image understanding. Supports the analysis of 300 images per day.
   * 
   * - understand-reid: Image understanding with person re-identification (ReID). Supports the analysis of 300 images per day.
   * 
   * - search: Search. Supports 75 searches per day.
   * 
   * - understand-search: Image understanding and search. Supports the analysis of 300 images and 75 searches per day.
   * 
   * - understand-reid-search: Image understanding with ReID and search. Supports the analysis of 300 images and 75 searches per day.
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
   * 
   * - month: A monthly subscription, calculated as 30 days.
   * 
   * - quarter: A quarterly subscription, calculated as 90 days.
   * 
   * - year: An annual subscription, calculated as 365 days.
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

