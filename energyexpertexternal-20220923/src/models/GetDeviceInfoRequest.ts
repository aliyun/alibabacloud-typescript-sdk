// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the device.
   * 
   * This parameter is required.
   * 
   * @example
   * pn_69873
   */
  deviceId?: string;
  /**
   * @remarks
   * The time string in the YYYY-mm-dd format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-07-26
   */
  ds?: string;
  /**
   * @remarks
   * The ID of the site.
   * 
   * This parameter is required.
   * 
   * @example
   * pn_95
   */
  factoryId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'deviceId',
      ds: 'ds',
      factoryId: 'factoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      ds: 'string',
      factoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

