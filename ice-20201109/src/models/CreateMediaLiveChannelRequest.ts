// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMediaLiveChannelRequestAudioSettings } from "./CreateMediaLiveChannelRequestAudioSettings";
import { CreateMediaLiveChannelRequestInputAttachments } from "./CreateMediaLiveChannelRequestInputAttachments";
import { CreateMediaLiveChannelRequestOutputGroups } from "./CreateMediaLiveChannelRequestOutputGroups";
import { CreateMediaLiveChannelRequestVideoSettings } from "./CreateMediaLiveChannelRequestVideoSettings";


export class CreateMediaLiveChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audioSettings?: CreateMediaLiveChannelRequestAudioSettings[];
  /**
   * @remarks
   * The associated inputs.
   * 
   * This parameter is required.
   */
  inputAttachments?: CreateMediaLiveChannelRequestInputAttachments[];
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
  outputGroups?: CreateMediaLiveChannelRequestOutputGroups[];
  /**
   * @remarks
   * The video settings.
   */
  videoSettings?: CreateMediaLiveChannelRequestVideoSettings[];
  static names(): { [key: string]: string } {
    return {
      audioSettings: 'AudioSettings',
      inputAttachments: 'InputAttachments',
      name: 'Name',
      outputGroups: 'OutputGroups',
      videoSettings: 'VideoSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSettings: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestAudioSettings },
      inputAttachments: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestInputAttachments },
      name: 'string',
      outputGroups: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestOutputGroups },
      videoSettings: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestVideoSettings },
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

