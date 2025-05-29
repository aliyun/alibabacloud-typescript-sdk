// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppsResponseBodyCloudApps extends $dara.Model {
  /**
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @example
   * 1.5.0
   */
  appVersion?: string;
  /**
   * @example
   * demo
   */
  description?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * upload success
   */
  statusDescription?: string;
  /**
   * @example
   * 2024-05-28T14:48:34+08:00
   */
  updateTime?: string;
  /**
   * @example
   * 2024-05-28T14:28:14+08:00
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      description: 'Description',
      status: 'Status',
      statusDescription: 'StatusDescription',
      updateTime: 'UpdateTime',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      description: 'string',
      status: 'string',
      statusDescription: 'string',
      updateTime: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

