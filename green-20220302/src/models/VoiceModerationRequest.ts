// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VoiceModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The ServiceCode for voice moderation.
   * 
   * @example
   * audio_media_detection
   */
  service?: string;
  /**
   * @remarks
   * The set of parameters that are required for the moderation service. The value must be a JSON string.
   * 
   * url: Required. The URL of the object to be detected. Make sure that the URL is accessible over the Internet. dataId: Optional. The data ID of the object to be detected. For more information, see ServiceParameter.
   * 
   * @example
   * {"url": "http://aliyundoc.com/test.flv", "dataId": "data1234"}
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

