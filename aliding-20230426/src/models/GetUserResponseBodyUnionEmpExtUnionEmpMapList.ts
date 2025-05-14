// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyUnionEmpExtUnionEmpMapList extends $dara.Model {
  /**
   * @example
   * dingxxx
   */
  cropId?: string;
  /**
   * @example
   * zhangsan
   */
  userid?: string;
  static names(): { [key: string]: string } {
    return {
      cropId: 'cropId',
      userid: 'userid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cropId: 'string',
      userid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

