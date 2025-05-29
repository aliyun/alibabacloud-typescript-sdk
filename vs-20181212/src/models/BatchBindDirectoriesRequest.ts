// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchBindDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      directoryId: 'DirectoryId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      directoryId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

