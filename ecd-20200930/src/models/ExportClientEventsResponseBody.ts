// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportClientEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The download URL of the exported files.
   * 
   * @example
   * https://cn-shanghai-servicemanager.oss-cn-shanghai.aliyuncs.com/A0_CLIENT_EVENT/EDS_Events%20List_20220519234611_w5HuD83KGs.csv?Expires=1652975773&OSSAccessKeyId=****&Signature=4erMG*********k%3D
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

