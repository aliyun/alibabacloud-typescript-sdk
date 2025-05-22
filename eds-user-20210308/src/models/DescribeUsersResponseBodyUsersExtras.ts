// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersResponseBodyUsersExtras extends $dara.Model {
  assignedResourceCount?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      assignedResourceCount: 'AssignedResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedResourceCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.assignedResourceCount) {
      $dara.Model.validateMap(this.assignedResourceCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

