// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageBatchModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The detection services supported by Image Moderation Pro. Separate multiple services with commas. Valid values:
   * 
   * - baselineCheck: General baseline check
   * 
   * - baselineCheck_pro: General baseline check (Professional Edition)
   * 
   * - tonalityImprove: Content administration check
   * 
   * - aigcCheck: AIGC image check
   * 
   * @example
   * baselineCheck,tonalityImprove
   */
  service?: string;
  /**
   * @remarks
   * The parameters for the content to moderate.
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

