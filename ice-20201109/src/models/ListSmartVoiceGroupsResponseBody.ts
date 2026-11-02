// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartVoiceGroupsResponseBodyVoiceGroupsVoiceList extends $dara.Model {
  /**
   * @remarks
   * The description of the voice.
   * 
   * @example
   * Female Voice
   */
  desc?: string;
  /**
   * @remarks
   * The name of the voice.
   * 
   * @example
   * zhitian
   */
  name?: string;
  /**
   * @remarks
   * The remarks for the voice.
   * 
   * @example
   * Chinese and English mixed
   */
  remark?: string;
  /**
   * @remarks
   * The sample rates supported by the current voice.
   * 
   * @example
   * 48000
   */
  supportSampleRate?: string;
  /**
   * @remarks
   * The voice type tag.
   * 
   * @example
   * General
   */
  tag?: string;
  /**
   * @remarks
   * The ID of the voice.
   * 
   * @example
   * zhitian
   */
  voice?: string;
  /**
   * @remarks
   * The speech service source of the voice.
   * 
   * @example
   * CosyVoice
   */
  voiceSource?: string;
  /**
   * @remarks
   * The voice type.
   * 
   * @example
   * Female
   */
  voiceType?: string;
  /**
   * @remarks
   * The URL of the sample audio for the voice.
   * 
   * @example
   * https://***.com/zhitian.mp3
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
      voiceSource: 'VoiceSource',
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
      voiceSource: 'string',
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

export class ListSmartVoiceGroupsResponseBodyVoiceGroups extends $dara.Model {
  /**
   * @remarks
   * The name of the voice group.
   * 
   * @example
   * Ultra HD
   */
  type?: string;
  /**
   * @remarks
   * The list of voices.
   */
  voiceList?: ListSmartVoiceGroupsResponseBodyVoiceGroupsVoiceList[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      voiceList: 'VoiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      voiceList: { 'type': 'array', 'itemType': ListSmartVoiceGroupsResponseBodyVoiceGroupsVoiceList },
    };
  }

  validate() {
    if(Array.isArray(this.voiceList)) {
      $dara.Model.validateArray(this.voiceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartVoiceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 627B30EB-1D0A-5C6D-8467-431626E0FA10
   */
  requestId?: string;
  /**
   * @remarks
   * The result set of voice groups.
   */
  voiceGroups?: ListSmartVoiceGroupsResponseBodyVoiceGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      voiceGroups: 'VoiceGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      voiceGroups: { 'type': 'array', 'itemType': ListSmartVoiceGroupsResponseBodyVoiceGroups },
    };
  }

  validate() {
    if(Array.isArray(this.voiceGroups)) {
      $dara.Model.validateArray(this.voiceGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

