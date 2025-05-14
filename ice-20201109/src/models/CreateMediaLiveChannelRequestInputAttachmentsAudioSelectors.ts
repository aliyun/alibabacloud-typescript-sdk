// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection } from "./CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection";
import { CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection } from "./CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection";
import { CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection } from "./CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection";


export class CreateMediaLiveChannelRequestInputAttachmentsAudioSelectors extends $dara.Model {
  /**
   * @remarks
   * The audio language selection.
   */
  audioLanguageSelection?: CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection;
  /**
   * @remarks
   * The audio PID selection.
   */
  audioPidSelection?: CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection;
  /**
   * @remarks
   * The audio track selection.
   */
  audioTrackSelection?: CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection[];
  /**
   * @remarks
   * The name of the audio selector. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * myselector
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      audioLanguageSelection: 'AudioLanguageSelection',
      audioPidSelection: 'AudioPidSelection',
      audioTrackSelection: 'AudioTrackSelection',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLanguageSelection: CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection,
      audioPidSelection: CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection,
      audioTrackSelection: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection },
      name: 'string',
    };
  }

  validate() {
    if(this.audioLanguageSelection && typeof (this.audioLanguageSelection as any).validate === 'function') {
      (this.audioLanguageSelection as any).validate();
    }
    if(this.audioPidSelection && typeof (this.audioPidSelection as any).validate === 'function') {
      (this.audioPidSelection as any).validate();
    }
    if(Array.isArray(this.audioTrackSelection)) {
      $dara.Model.validateArray(this.audioTrackSelection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

