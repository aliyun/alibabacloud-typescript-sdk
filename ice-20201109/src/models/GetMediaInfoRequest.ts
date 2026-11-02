// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaInfoRequest extends $dara.Model {
  authTimeout?: number;
  /**
   * @remarks
   * The URL of the media asset to be queried in the corresponding system. The media asset must be registered in the IMS content library and attached to an IMS media ID before use.
   * 
   * - OSS addresses. Two formats are supported:
   * 
   * http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4 or
   * 
   * oss://example-bucket/example.mp4. In this format, the default OSS region is the same as the service registration area.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The IMS media asset ID. If this parameter is empty, InputURL must be specified.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the media asset file URL in the response. Valid values:
   * 
   * - oss: Returns the OSS URL. This is the default value.
   * 
   * - cdn: Returns the CDN URL. A CDN URL is returned only when the media asset is imported from ApsaraVideo VOD and an accelerated domain name is configured in ApsaraVideo VOD.
   * 
   * @example
   * cdn
   */
  outputType?: string;
  /**
   * @remarks
   * Specifies whether to return detailed information for the corresponding media asset fields. Supported fields:
   * 
   * AiRoughData.StandardSmartTagJob: Specifies whether to return detailed tagging results if the media asset has been submitted for tag analysis. Valid values:
   * 
   * - false: The task result is returned as a URL. This is the default value.
   * 
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

