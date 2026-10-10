// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageBatchModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The detection types supported by Image Moderation Enhanced Edition. Separate multiple values with commas. Valid values:
   * - baselineCheck: general baseline check
   * - baselineCheck_pro: general baseline check professional edition
   * - tonalityImprove: content governance detection
   * - aigcCheck: AIGC image detection
   * 
   * @example
   * baselineCheck,tonalityImprove
   */
  service?: string;
  /**
   * @remarks
   * The parameter set for the content moderation object.
   * 
   * @example
   * {
   *         "imageUrl": "https://img.alicdn.com/tfs/TB1U4r9AeH2gK0jSZJnXXaT1FXa-2880-480.png",
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

