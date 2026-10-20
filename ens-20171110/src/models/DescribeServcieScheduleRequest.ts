// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServcieScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * You can obtain this value after you call the CreateApplication operation to create an application.
   * 
   * This parameter is required.
   * 
   * @example
   * 474bdef0-d149-4695-abfb-52912d91****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is invalid.
   * 
   * @example
   * android
   */
  podConfigName?: string;
  /**
   * @remarks
   * The unique ID of the terminal device.
   * 
   * You can obtain this value after you call the RunServiceSchedule operation and set ServiceAction to Start to start service scheduling.
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

