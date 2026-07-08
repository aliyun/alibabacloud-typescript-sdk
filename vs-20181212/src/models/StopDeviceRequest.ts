// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * Device ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
   * Time to restart the stream.
   * 
   * @example
   * 2021-12-10T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

