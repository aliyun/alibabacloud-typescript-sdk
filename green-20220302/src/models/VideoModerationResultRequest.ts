// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * Valid values:
   * 
   * *   liveStreamDetection: live stream moderation
   * *   videoDetection: video file moderation
   * *   liveStreamDetection_cb: live stream moderation_For regions outside the Chinese mainland
   * *   videoDetection_cb: video file moderation_For regions outside the Chinese mainland.
   * 
   * @example
   * videoDetection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The ID of the task that you want to query. You can specify one task ID at a time.
   * 
   * @example
   * {\\"taskId\\":\\"au_f_8PoWiZKoLbczp5HRn69VdT-1y8@U5\\"}
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

