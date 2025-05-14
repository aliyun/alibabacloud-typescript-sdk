// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection } from "./UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection";
import { UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection } from "./UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection";
import { UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection } from "./UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection";


export class UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectors extends $dara.Model {
  /**
   * @remarks
   * The audio language selection.
   */
  audioLanguageSelection?: UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection;
  /**
   * @remarks
   * The audio PID selection.
   */
  audioPidSelection?: UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection;
  /**
   * @remarks
   * The audio track selection.
   */
  audioTrackSelection?: UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection[];
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
      audioLanguageSelection: UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioLanguageSelection,
      audioPidSelection: UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioPidSelection,
      audioTrackSelection: { 'type': 'array', 'itemType': UpdateMediaLiveChannelRequestInputAttachmentsAudioSelectorsAudioTrackSelection },
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

