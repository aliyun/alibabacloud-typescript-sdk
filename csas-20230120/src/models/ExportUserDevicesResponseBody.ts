// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportUserDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
   */
  requestId?: string;
  /**
   * @remarks
   * URL to download the file. The URL expires in one minute.
   * 
   * @example
   * https://sase-export.oss-cn-hangzhou.aliyuncs.com/export%2Fapp-device%2F20240607154831.xlsx?Expires=1717746571&OSSAccessKeyId=********************
   */
  signedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signedUrl: 'SignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signedUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

