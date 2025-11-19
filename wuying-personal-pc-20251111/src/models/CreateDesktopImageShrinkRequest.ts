// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopImageShrinkRequest extends $dara.Model {
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
  startUpFilePathListShrink?: string;
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
      startUpFilePathListShrink: 'StartUpFilePathList',
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
      startUpFilePathListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

