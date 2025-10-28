// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageQueueModerationRequest extends $dara.Model {
  /**
   * @example
   * baselineCheck
   */
  service?: string;
  /**
   * @example
   * {
   *         "imageUrl": "https://img.alicdn.com/xxx.jpg",
   *         "dataId": "img123****"
   *     }
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

