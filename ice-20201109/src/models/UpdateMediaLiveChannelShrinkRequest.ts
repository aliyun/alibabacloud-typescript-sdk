// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaLiveChannelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audioSettingsShrink?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  channelId?: string;
  /**
   * @remarks
   * The input attachment settings.
   * 
   * This parameter is required.
   */
  inputAttachmentsShrink?: string;
  /**
   * @remarks
   * The channel name. The name can contain letters, digits, hyphens (-), and underscores (_). The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * mych
   */
  name?: string;
  /**
   * @remarks
   * The output group configuration.
   * 
   * This parameter is required.
   */
  outputGroupsShrink?: string;
  /**
   * @remarks
   * The video settings.
   */
  videoSettingsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      audioSettingsShrink: 'AudioSettings',
      channelId: 'ChannelId',
      inputAttachmentsShrink: 'InputAttachments',
      name: 'Name',
      outputGroupsShrink: 'OutputGroups',
      videoSettingsShrink: 'VideoSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSettingsShrink: 'string',
      channelId: 'string',
      inputAttachmentsShrink: 'string',
      name: 'string',
      outputGroupsShrink: 'string',
      videoSettingsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

