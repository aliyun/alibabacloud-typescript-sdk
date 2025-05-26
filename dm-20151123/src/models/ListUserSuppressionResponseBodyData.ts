// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserSuppressionResponseBodyDataUserSuppressions } from "./ListUserSuppressionResponseBodyDataUserSuppressions";


export class ListUserSuppressionResponseBodyData extends $dara.Model {
  userSuppressions?: ListUserSuppressionResponseBodyDataUserSuppressions[];
  static names(): { [key: string]: string } {
    return {
      userSuppressions: 'UserSuppressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userSuppressions: { 'type': 'array', 'itemType': ListUserSuppressionResponseBodyDataUserSuppressions },
    };
  }

  validate() {
    if(Array.isArray(this.userSuppressions)) {
      $dara.Model.validateArray(this.userSuppressions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

