// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserNickList extends $dara.Model {
  userNicks?: string[];
  static names(): { [key: string]: string } {
    return {
      userNicks: 'UserNicks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userNicks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userNicks)) {
      $dara.Model.validateArray(this.userNicks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

