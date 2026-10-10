// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The detection types supported by Image Moderation Enhanced Edition. Valid values:
   * - baselineCheck: general baseline check
   * - baselineCheck_pro: general baseline check (Professional Edition)
   * - baselineCheck_cb: general baseline check (Overseas Edition)
   * - tonalityImprove: content governance detection
   * - aigcCheck: AIGC image detection
   * - aigcViolationDetection: AIGC image infringement detection
   * - aigcDetector: AIGC image generation determination
   * - profilePhotoCheck: profile picture detection
   * - postImageCheck: post and comment image detection
   * - advertisingCheck: marketing material detection
   * - liveStreamCheck: video or live stream screenshot detection
   * - generalOcr: general image and text OCR
   * - generalRecognition: universal image recognition
   * - postImageCheckByVL: image moderation service with large and small model fusion
   * - postImageCheckByVL_cb: image moderation service with large and small model fusion (Overseas Edition)
   * - baselineCheckByVL: general image moderation large model service
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  /**
   * @remarks
   * The parameter set for the content moderation object. The value is a JSON string.
   * - imageUrl: the URL of the object to be moderated. Required.
   * - dataId: the data ID corresponding to the moderation object. Optional.
   * - referer: the Referer request header, used for scenarios such as hotlink protection. Optional.
   * 
   * @example
   * {"imageUrl":"https://img.alicdn.com/tfs/TB1U4r9AeH2gK0jSZJnXXaT1FXa-2880-480.png","dataId":"img1234567"}
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

