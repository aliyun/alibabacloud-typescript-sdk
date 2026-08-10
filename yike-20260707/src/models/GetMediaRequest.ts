// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the signed file URL. Unit: seconds.
   * 
   * @example
   * 3600
   */
  authTimeout?: number;
  /**
   * @remarks
   * Currently unavailable.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The media asset ID. If this parameter is not empty, the system queries the media asset by this ID and validates whether the value is a valid MediaId.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'number',
      inputURL: 'string',
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

