// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The moderation services supported by Image Moderation 2.0. Valid values:
   * 
   * *   baselineCheck: common baseline moderation
   * *   baselineCheck_pro: common baseline moderation_Professional
   * *   baselineCheck_cb: common baseline moderation_For regions outside the Chinese mainland
   * *   tonalityImprove: content governance moderation
   * *   aigcCheck: AI-generated image identification
   * *   profilePhotoCheck: avatar image moderation
   * *   advertisingCheck: marketing material identification
   * *   liveStreamCheck: moderation of screenshots of videos and live streams
   * 
   * Valid values:
   * 
   * *   liveStreamCheck: moderation of screenshots of videos and live streams
   * *   baselineCheck: common baseline moderation
   * *   aigcCheck: AI-generated image identification
   * *   baselineCheck_pro: common baseline moderation_Professional
   * *   advertisingCheck: marketing material identification
   * *   baselineCheck_cb: common baseline moderation_For regions outside the Chinese mainland
   * *   tonalityImprove: content governance moderation
   * *   profilePhotoCheck: avatar image moderation
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * *   imageUrl: the URL of the object that you want to moderate. This parameter is required.
   * *   dataId: the ID of the object that you want to moderate. This parameter is optional.
   * 
   * @example
   * {"imageUrl":"https://www.aliyun.com/test.jpg","dataId":"img1234567"}
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

