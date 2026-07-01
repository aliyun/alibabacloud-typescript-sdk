// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartVoiceGroupsResponseBodyVoiceGroupsVoiceList extends $dara.Model {
  /**
   * @remarks
   * The description of the voice.
   * 
   * @example
   * 甜美女声
   */
  desc?: string;
  /**
   * @remarks
   * The name of the voice.
   * 
   * @example
   * Zhi Tian
   */
  name?: string;
  /**
   * @remarks
   * Notes for the voice.
   * 
   * @example
   * 中文及中英文混合场景
   */
  remark?: string;
  /**
   * @remarks
   * The sample rates supported by the voice.
   * 
   * @example
   * 48000
   */
  supportSampleRate?: string;
  /**
   * @remarks
   * The tag for the voice category.
   * 
   * @example
   * General scenario
   */
  tag?: string;
  /**
   * @remarks
   * The voice ID.
   * 
   * @example
   * zhitian
   */
  voice?: string;
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
   * The URL of the sample audio.
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
   * The voice list.
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
   * The request ID.
   * 
   * @example
   * 627B30EB-1D0A-5C6D-8467-431626E0FA10
   */
  requestId?: string;
  /**
   * @remarks
   * An array of voice groups.
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

