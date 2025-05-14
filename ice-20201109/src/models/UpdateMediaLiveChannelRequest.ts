// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMediaLiveChannelRequestAudioSettings } from "./UpdateMediaLiveChannelRequestAudioSettings";
import { UpdateMediaLiveChannelRequestInputAttachments } from "./UpdateMediaLiveChannelRequestInputAttachments";
import { UpdateMediaLiveChannelRequestOutputGroups } from "./UpdateMediaLiveChannelRequestOutputGroups";
import { UpdateMediaLiveChannelRequestVideoSettings } from "./UpdateMediaLiveChannelRequestVideoSettings";


export class UpdateMediaLiveChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audioSettings?: UpdateMediaLiveChannelRequestAudioSettings[];
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
  inputAttachments?: UpdateMediaLiveChannelRequestInputAttachments[];
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
  outputGroups?: UpdateMediaLiveChannelRequestOutputGroups[];
  /**
   * @remarks
   * The video settings.
   */
  videoSettings?: UpdateMediaLiveChannelRequestVideoSettings[];
  static names(): { [key: string]: string } {
    return {
      audioSettings: 'AudioSettings',
      channelId: 'ChannelId',
      inputAttachments: 'InputAttachments',
      name: 'Name',
      outputGroups: 'OutputGroups',
      videoSettings: 'VideoSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSettings: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestAudioSettings },
      channelId: 'string',
      inputAttachments: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestInputAttachments },
      name: 'string',
      outputGroups: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestOutputGroups },
      videoSettings: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestVideoSettings },
    };
  }

  validate() {
    if(Array.isArray(this.audioSettings)) {
      $dara.Model.validateArray(this.audioSettings);
    }
    if(Array.isArray(this.inputAttachments)) {
      $dara.Model.validateArray(this.inputAttachments);
    }
    if(Array.isArray(this.outputGroups)) {
      $dara.Model.validateArray(this.outputGroups);
    }
    if(Array.isArray(this.videoSettings)) {
      $dara.Model.validateArray(this.videoSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

