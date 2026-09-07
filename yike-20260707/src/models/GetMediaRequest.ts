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
  bizConfig?: string;
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
   * The media asset ID. If this parameter is not empty, the query is performed based on this parameter, and the system verifies whether the value is a valid MediaId.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      bizConfig: 'BizConfig',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'number',
      bizConfig: 'string',
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

