// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultimodalAsyncModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of moderation service. Valid values:
   * 
   * - post_text_image_detection: multimodal moderation for post text and images
   * 
   * - profile_text_image_detection: multimodal moderation for profile picture and nickname
   * 
   * @example
   * post_text_image_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameter set required by the moderation service. This value must be a JSON string.
   * 
   * @example
   * {"mainData":{"mainContent":"testMainContent","mainTitle":"testMainTitle","mainImages":[{"imageUrl":"https://xxxx.com/001.jpg"}]}}
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

