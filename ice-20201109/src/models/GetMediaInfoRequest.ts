// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaInfoRequest extends $dara.Model {
  authTimeout?: number;
  /**
   * @remarks
   * The input URL of the media asset in another service. The URL must be registered in the IMS content library and bound to the ID of the media asset in IMS.
   * 
   * *   For a media asset from Object Storage Service (OSS), the URL may have one of the following formats:
   * 
   * http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4 or
   * 
   * oss://example-bucket/example.mp4. The second format indicates that the region in which the OSS bucket of the media asset resides is the same as the region in which OSS is activated.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The ID of the media asset in IMS. If this parameter is left empty, the InputURL parameter must be specified.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the URL of the media asset to return in the response. Valid values:
   * 
   * *   oss (default): an OSS URL.
   * *   cdn: a CDN URL. A CDN URL is returned only if the media asset is imported from ApsaraVideo VOD and the relevant domain name is an accelerated domain name in ApsaraVideo VOD.
   * 
   * @example
   * cdn
   */
  outputType?: string;
  /**
   * @remarks
   * Specifies whether to return detailed information for specific media asset attributes. Supported attributes: AiRoughData.StandardSmartTagJob, which specifies whether to return detailed tag information if a tagging job has been submitted for the media asset. Valid values for the attribute:
   * 
   * *   false (default): The job result is returned as a URL.
   * *   true: The job result is returned as text.
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

