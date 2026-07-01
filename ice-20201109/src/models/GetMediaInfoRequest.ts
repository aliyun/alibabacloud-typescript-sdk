// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the signed URL, in seconds.
   */
  authTimeout?: number;
  /**
   * @remarks
   * The address of the media asset to query. You must first register the media asset in the IMS media library and bind it to a `mediaId`.
   * 
   * - Object Storage Service (OSS) URL. Two formats are supported:
   * 
   * `http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4`
   * 
   * `oss://example-bucket/example.mp4`. When you use this format, the OSS region defaults to the service endpoint region.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The ID of the media asset in Intelligent Media Services (IMS). If you omit this parameter, you must specify `InputURL`.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of URL to return for the media asset file.
   * 
   * - `oss`: Returns the OSS URL. This is the default value.
   * 
   * - `cdn`: Returns the Content Delivery Network (CDN) URL. A CDN URL is returned only if the media asset was imported from Video on Demand (VOD) and has a CDN domain name configured in VOD.
   * 
   * @example
   * cdn
   */
  outputType?: string;
  /**
   * @remarks
   * Whether to return detailed information for specific media asset fields. The only supported field is `AiRoughData.StandardSmartTagJob`, which specifies how the result of a tag analysis task is returned.
   * 
   * - `false`: The task result is returned as a URL. This is the default value.
   * 
   * - `true`: The task result is returned as a string.
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

