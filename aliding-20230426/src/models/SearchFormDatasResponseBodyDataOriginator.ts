// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchFormDatasResponseBodyDataOriginatorUserName } from "./SearchFormDatasResponseBodyDataOriginatorUserName";


export class SearchFormDatasResponseBodyDataOriginator extends $dara.Model {
  /**
   * @example
   * 012345
   */
  userId?: string;
  userName?: SearchFormDatasResponseBodyDataOriginatorUserName;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: SearchFormDatasResponseBodyDataOriginatorUserName,
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

