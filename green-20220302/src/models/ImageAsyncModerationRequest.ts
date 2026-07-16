// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageAsyncModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The detection service supported by the enhanced image moderation feature. Valid values:
   * 
   * - baselineCheck: common baseline moderation
   * 
   * - baselineCheck_pro: common baseline moderation Professional Edition
   * 
   * - baselineCheck_cb: common baseline moderation for services outside China
   * 
   * - tonalityImprove: content administration moderation
   * 
   * - aigcCheck: AIGC image moderation
   * 
   * - profilePhotoCheck: profile picture moderation
   * 
   * - advertisingCheck: ad material moderation
   * 
   * - liveStreamCheck: video or live stream screenshot moderation
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  /**
   * @remarks
   * A set of parameters related to the content to be moderated. The value must be a JSON string.
   * 
   * @example
   * {"imageUrl":"https://img.alicdn.com/tfs/TB1U4r9AeH2gK0jSZJnXXaT1FXa-2880-480.png","dataId":"img123****"}
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

