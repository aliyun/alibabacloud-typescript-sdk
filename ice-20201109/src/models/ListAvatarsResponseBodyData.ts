// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAvatarsResponseBodyDataAvatarList } from "./ListAvatarsResponseBodyDataAvatarList";


export class ListAvatarsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried digital humans.
   */
  avatarList?: ListAvatarsResponseBodyDataAvatarList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      avatarList: 'AvatarList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarList: { 'type': 'array', 'itemType': ListAvatarsResponseBodyDataAvatarList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.avatarList)) {
      $dara.Model.validateArray(this.avatarList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

