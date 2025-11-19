// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKey?: string;
  autoCleanUserData?: boolean;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desktopId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  diskType?: string;
  enableStartUpConfig?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  imageName?: string;
  sessionId?: string;
  startUpFilePathList?: string[];
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      autoCleanUserData: 'AutoCleanUserData',
      description: 'Description',
      desktopId: 'DesktopId',
      diskType: 'DiskType',
      enableStartUpConfig: 'EnableStartUpConfig',
      imageName: 'ImageName',
      sessionId: 'SessionId',
      startUpFilePathList: 'StartUpFilePathList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      autoCleanUserData: 'boolean',
      description: 'string',
      desktopId: 'string',
      diskType: 'string',
      enableStartUpConfig: 'boolean',
      imageName: 'string',
      sessionId: 'string',
      startUpFilePathList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.startUpFilePathList)) {
      $dara.Model.validateArray(this.startUpFilePathList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

