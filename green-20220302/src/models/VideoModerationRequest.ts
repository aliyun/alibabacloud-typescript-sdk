// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The service code for video moderation.
   * 
   * @example
   * videoDetection
   */
  service?: string;
  /**
   * @remarks
   * The parameters that are required for the moderation service. The value must be a JSON string.
   * 
   * - url: Required. The URL of the object to be moderated. Make sure that the URL can be accessed over the Internet.
   * - dataId: Optional. The data ID of the object to be moderated.
   * 
   * For more information, see [ServiceParameter](https://help.aliyun.com/document_detail/2505810.html).
   * 
   * @example
   * {"url": "https://talesofai.oss-cn-shanghai.aliyuncs.com/xxx.mp4", "dataId": "data1234"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

