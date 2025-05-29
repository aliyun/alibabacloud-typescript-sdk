// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppInstallationsResponseBodyInstallationInfos extends $dara.Model {
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
   * 2024-05-28T14:48:34+08:00
   */
  installationTime?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @example
   * installed
   */
  status?: string;
  /**
   * @example
   * install success
   */
  statusDescription?: string;
  /**
   * @example
   * 2024-05-28T14:50:04+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      installationTime: 'InstallationTime',
      renderingInstanceId: 'RenderingInstanceId',
      status: 'Status',
      statusDescription: 'StatusDescription',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      installationTime: 'string',
      renderingInstanceId: 'string',
      status: 'string',
      statusDescription: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

