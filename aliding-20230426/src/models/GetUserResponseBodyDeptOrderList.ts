// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyDeptOrderList extends $dara.Model {
  deptId?: number;
  order?: number;
  static names(): { [key: string]: string } {
    return {
      deptId: 'deptId',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptId: 'number',
      order: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

