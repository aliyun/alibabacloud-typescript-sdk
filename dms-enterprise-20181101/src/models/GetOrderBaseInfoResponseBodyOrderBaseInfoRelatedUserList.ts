// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserList extends $dara.Model {
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

