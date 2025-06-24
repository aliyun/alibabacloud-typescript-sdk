// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChatGroupParticipantsResponseBodyDataList } from "./ListChatGroupParticipantsResponseBodyDataList";


export class ListChatGroupParticipantsResponseBodyData extends $dara.Model {
  list?: ListChatGroupParticipantsResponseBodyDataList[];
  /**
   * @example
   * 8
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListChatGroupParticipantsResponseBodyDataList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

