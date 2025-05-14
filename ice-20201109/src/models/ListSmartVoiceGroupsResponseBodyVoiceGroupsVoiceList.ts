// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartVoiceGroupsResponseBodyVoiceGroupsVoiceList extends $dara.Model {
  /**
   * @remarks
   * The speaker description.
   */
  desc?: string;
  /**
   * @remarks
   * The speaker name.
   */
  name?: string;
  /**
   * @remarks
   * The remarks of the speaker.
   */
  remark?: string;
  supportSampleRate?: string;
  /**
   * @remarks
   * The tag of the speaker type.
   */
  tag?: string;
  /**
   * @remarks
   * The speaker ID.
   * 
   * @example
   * zhitian
   */
  voice?: string;
  /**
   * @remarks
   * The speaker type.
   * 
   * Valid values:
   * 
   * *   Male
   * *   Female
   * *   Boy
   * *   Girl
   * 
   * @example
   * Female
   */
  voiceType?: string;
  /**
   * @remarks
   * The URL of the sample audio file.
   * 
   * @example
   * https://***.com/zhiqing.mp3
   */
  voiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      name: 'Name',
      remark: 'Remark',
      supportSampleRate: 'SupportSampleRate',
      tag: 'Tag',
      voice: 'Voice',
      voiceType: 'VoiceType',
      voiceUrl: 'VoiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      name: 'string',
      remark: 'string',
      supportSampleRate: 'string',
      tag: 'string',
      voice: 'string',
      voiceType: 'string',
      voiceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

