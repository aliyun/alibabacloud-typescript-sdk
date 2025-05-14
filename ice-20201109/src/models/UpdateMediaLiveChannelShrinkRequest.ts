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
   * The ID of the channel.
   * 
   * This parameter is required.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  channelId?: string;
  /**
   * @remarks
   * The inputs associated with the channel.
   * 
   * This parameter is required.
   */
  inputAttachmentsShrink?: string;
  /**
   * @remarks
   * The name of the channel. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * mych
   */
  name?: string;
  /**
   * @remarks
   * The output groups.
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

