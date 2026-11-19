// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWatermarkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**.
   * 
   * If the multi-application system is enabled, you can specify an application ID to query the image and text watermark templates of a specific application. If you do not specify this parameter, the system returns the image and text watermark templates of all applications by default. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

