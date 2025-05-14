// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserResponseBodyUnionEmpExtUnionEmpMapList } from "./GetUserResponseBodyUnionEmpExtUnionEmpMapList";


export class GetUserResponseBodyUnionEmpExt extends $dara.Model {
  /**
   * @example
   * dingxxx
   */
  corpId?: string;
  unionEmpMapList?: GetUserResponseBodyUnionEmpExtUnionEmpMapList[];
  /**
   * @example
   * zhangsan
   */
  userid?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      unionEmpMapList: 'unionEmpMapList',
      userid: 'userid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      unionEmpMapList: { 'type': 'array', 'itemType': GetUserResponseBodyUnionEmpExtUnionEmpMapList },
      userid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.unionEmpMapList)) {
      $dara.Model.validateArray(this.unionEmpMapList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

