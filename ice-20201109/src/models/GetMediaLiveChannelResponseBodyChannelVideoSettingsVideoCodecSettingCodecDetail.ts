// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaLiveChannelResponseBodyChannelVideoSettingsVideoCodecSettingCodecDetail extends $dara.Model {
  /**
   * @remarks
   * The video encoding level. It is not supported yet.
   * 
   * @example
   * H264_LEVEL_AUTO
   */
  level?: string;
  /**
   * @remarks
   * The H.264 profile.
   * 
   * @example
   * MAIN
   */
  profile?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      profile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

