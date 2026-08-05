// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaInfoRequest extends $dara.Model {
  authTimeout?: number;
  /**
   * @remarks
   * The address of the media asset in the corresponding system. Before use, the media asset must be registered in the IMS content library and bound to an IMS mediaId.
   * 
   * - OSS address. Two formats are supported:
   * 
   * http(s)://example-bucket.oss-ap-southeast-1.aliyuncs.com/example.mp4 or
   * 
   * oss://example-bucket/example.mp4. This format assumes the OSS region is the same as the service access region by default.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The IMS media asset ID. If this parameter is empty, InputURL is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the media file address in the response:
   * 
   * @example
   * cdn
   */
  outputType?: string;
  /**
   * @remarks
   * Specifies whether to return detailed information for the corresponding media asset fields. The following fields are supported:
   * AiRoughData.StandardSmartTagJob: Specifies whether to return detailed tagging results if the media asset has been submitted for tag analysis.
   * - Default value: false. The task result is returned as a URL.
   * - true: The task result is returned as text.
   * 
   * @example
   * {"AiRoughData.StandardSmartTagJob": false}
   */
  returnDetailedInfo?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      outputType: 'OutputType',
      returnDetailedInfo: 'ReturnDetailedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'number',
      inputURL: 'string',
      mediaId: 'string',
      outputType: 'string',
      returnDetailedInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

