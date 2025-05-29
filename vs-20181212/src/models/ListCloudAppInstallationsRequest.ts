// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAppInstallationsRequest extends $dara.Model {
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
   * 1.0
   */
  appVersion?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

