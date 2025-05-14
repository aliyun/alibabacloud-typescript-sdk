// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyLeaderInDept extends $dara.Model {
  deptId?: number;
  leader?: boolean;
  static names(): { [key: string]: string } {
    return {
      deptId: 'deptId',
      leader: 'leader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptId: 'number',
      leader: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

