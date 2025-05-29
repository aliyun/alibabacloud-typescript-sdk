// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 34871************3380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3998**************9488-cn-qingdao
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

