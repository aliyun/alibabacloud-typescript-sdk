// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyDBInstanceGdnMemberList extends $dara.Model {
  memberName?: string;
  role?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      role: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

