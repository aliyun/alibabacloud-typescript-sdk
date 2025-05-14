// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaLiveChannelResponseBodyChannelAudioSettings } from "./GetMediaLiveChannelResponseBodyChannelAudioSettings";
import { GetMediaLiveChannelResponseBodyChannelInputAttachments } from "./GetMediaLiveChannelResponseBodyChannelInputAttachments";
import { GetMediaLiveChannelResponseBodyChannelOutputGroups } from "./GetMediaLiveChannelResponseBodyChannelOutputGroups";
import { GetMediaLiveChannelResponseBodyChannelVideoSettings } from "./GetMediaLiveChannelResponseBodyChannelVideoSettings";


export class GetMediaLiveChannelResponseBodyChannel extends $dara.Model {
  /**
   * @remarks
   * The audio settings.
   */
  audioSettings?: GetMediaLiveChannelResponseBodyChannelAudioSettings[];
  /**
   * @remarks
   * The ID of the channel.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  channelId?: string;
  /**
   * @remarks
   * The time when the channel was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-12-03T06:56:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The inputs associated with the channel.
   */
  inputAttachments?: GetMediaLiveChannelResponseBodyChannelInputAttachments[];
  /**
   * @remarks
   * The time when the channel was last started. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. If the channel has never been started since it was created, an empty string is returned.
   * 
   * @example
   * 2024-12-03T06:56:42Z
   */
  lastStartTime?: string;
  /**
   * @remarks
   * The time when the channel was last stopped. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. If the channel has never stopped since it was created, an empty string is returned.
   * 
   * @example
   * 2024-12-03T06:56:42Z
   */
  lastStopTime?: string;
  /**
   * @remarks
   * The channel name.
   * 
   * @example
   * mych
   */
  name?: string;
  /**
   * @remarks
   * The output groups.
   */
  outputGroups?: GetMediaLiveChannelResponseBodyChannelOutputGroups[];
  /**
   * @remarks
   * The state of the channel. Valid values: IDLE, STARTING, RUNNING, RECOVERING, and STOPPING.
   * 
   * @example
   * IDLE
   */
  state?: string;
  /**
   * @remarks
   * The video settings.
   */
  videoSettings?: GetMediaLiveChannelResponseBodyChannelVideoSettings[];
  static names(): { [key: string]: string } {
    return {
      audioSettings: 'AudioSettings',
      channelId: 'ChannelId',
      createTime: 'CreateTime',
      inputAttachments: 'InputAttachments',
      lastStartTime: 'LastStartTime',
      lastStopTime: 'LastStopTime',
      name: 'Name',
      outputGroups: 'OutputGroups',
      state: 'State',
      videoSettings: 'VideoSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSettings: { 'type': 'array', 'itemType': GetMediaLiveChannelResponseBodyChannelAudioSettings },
      channelId: 'string',
      createTime: 'string',
      inputAttachments: { 'type': 'array', 'itemType': GetMediaLiveChannelResponseBodyChannelInputAttachments },
      lastStartTime: 'string',
      lastStopTime: 'string',
      name: 'string',
      outputGroups: { 'type': 'array', 'itemType': GetMediaLiveChannelResponseBodyChannelOutputGroups },
      state: 'string',
      videoSettings: { 'type': 'array', 'itemType': GetMediaLiveChannelResponseBodyChannelVideoSettings },
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

