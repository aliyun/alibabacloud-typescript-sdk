// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSmartVoiceGroupsResponseBodyVoiceGroupsVoiceList } from "./ListSmartVoiceGroupsResponseBodyVoiceGroupsVoiceList";


export class ListSmartVoiceGroupsResponseBodyVoiceGroups extends $dara.Model {
  /**
   * @remarks
   * The name of the speaker group.
   */
  type?: string;
  /**
   * @remarks
   * The speakers.
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

