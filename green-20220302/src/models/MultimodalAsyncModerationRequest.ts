// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultimodalAsyncModerationRequest extends $dara.Model {
  /**
   * @example
   * post_text_image_detection
   */
  service?: string;
  /**
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

