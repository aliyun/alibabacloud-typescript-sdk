// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSmartVoiceGroupsResponseBodyVoiceGroups } from "./ListSmartVoiceGroupsResponseBodyVoiceGroups";


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
   * The queried speaker groups.
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

