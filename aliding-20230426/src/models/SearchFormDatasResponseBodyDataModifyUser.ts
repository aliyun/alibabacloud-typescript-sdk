// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchFormDatasResponseBodyDataModifyUserUserName } from "./SearchFormDatasResponseBodyDataModifyUserUserName";


export class SearchFormDatasResponseBodyDataModifyUser extends $dara.Model {
  /**
   * @example
   * 012345
   */
  userId?: string;
  userName?: SearchFormDatasResponseBodyDataModifyUserUserName;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: SearchFormDatasResponseBodyDataModifyUserUserName,
    };
  }

  validate() {
    if(this.userName && typeof (this.userName as any).validate === 'function') {
      (this.userName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

