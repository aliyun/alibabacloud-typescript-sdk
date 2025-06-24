// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChatGroupResponseBodyDataList } from "./ListChatGroupResponseBodyDataList";


export class ListChatGroupResponseBodyData extends $dara.Model {
  list?: ListChatGroupResponseBodyDataList[];
  /**
   * @example
   * 51
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
      list: { 'type': 'array', 'itemType': ListChatGroupResponseBodyDataList },
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

