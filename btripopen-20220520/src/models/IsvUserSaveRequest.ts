// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IsvUserSaveRequestUserList } from "./IsvUserSaveRequestUserList";


export class IsvUserSaveRequest extends $dara.Model {
  userList?: IsvUserSaveRequestUserList[];
  static names(): { [key: string]: string } {
    return {
      userList: 'user_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userList: { 'type': 'array', 'itemType': IsvUserSaveRequestUserList },
    };
  }

  validate() {
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

