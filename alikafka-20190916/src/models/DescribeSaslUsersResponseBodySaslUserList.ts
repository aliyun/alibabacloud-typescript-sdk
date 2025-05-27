// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSaslUsersResponseBodySaslUserListSaslUserVO } from "./DescribeSaslUsersResponseBodySaslUserListSaslUserVo";


export class DescribeSaslUsersResponseBodySaslUserList extends $dara.Model {
  saslUserVO?: DescribeSaslUsersResponseBodySaslUserListSaslUserVO[];
  static names(): { [key: string]: string } {
    return {
      saslUserVO: 'SaslUserVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saslUserVO: { 'type': 'array', 'itemType': DescribeSaslUsersResponseBodySaslUserListSaslUserVO },
    };
  }

  validate() {
    if(Array.isArray(this.saslUserVO)) {
      $dara.Model.validateArray(this.saslUserVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

