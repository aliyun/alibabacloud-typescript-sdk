// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServcieScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 474bdef0-d149-4695-abfb-52912d91****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter does not take effect.
   * 
   * @example
   * android
   */
  podConfigName?: string;
  /**
   * @remarks
   * The unique ID of the device.
   * 
   * This parameter is required.
   * 
   * @example
   * hdm_f022bf160dc69e2d8eb421e508eb****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      podConfigName: 'PodConfigName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      podConfigName: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

