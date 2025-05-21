// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAvatarProjectResponseBodyQueryAvatarProjectResultList } from "./ListAvatarProjectResponseBodyQueryAvatarProjectResultList";


export class ListAvatarProjectResponseBody extends $dara.Model {
  queryAvatarProjectResultList?: ListAvatarProjectResponseBodyQueryAvatarProjectResultList[];
  /**
   * @example
   * D7F2B74F-63F2-5DD6-95E4-F408EAD6617E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryAvatarProjectResultList: 'queryAvatarProjectResultList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryAvatarProjectResultList: { 'type': 'array', 'itemType': ListAvatarProjectResponseBodyQueryAvatarProjectResultList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queryAvatarProjectResultList)) {
      $dara.Model.validateArray(this.queryAvatarProjectResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

