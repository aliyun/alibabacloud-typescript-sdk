// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the validity period, in seconds, of the file URL that requires authentication for access.
   * 
   * @example
   * 3600
   */
  authTimeout?: number;
  bizConfig?: string;
  /**
   * @remarks
   * This parameter is currently unavailable.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The ID of the media asset. If this parameter is specified, the query is performed based on this ID and the system verifies whether it is a valid media asset ID.
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

