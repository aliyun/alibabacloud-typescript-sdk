// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageBatchModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The types of detection supported by the enhanced image review, separated by English commas. Values:
   * 
   * - baselineCheck：General Baseline Detection
   * - baselineCheck_pro：General Baseline Detection_Pro Edition
   * - tonalityImprove：Content governance monitoring
   * - aigcCheck：AIGC image detection
   * 
   * @example
   * baselineCheck,tonalityImprove
   */
  service?: string;
  /**
   * @remarks
   * The set of relevant parameters for content detection objects.
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

