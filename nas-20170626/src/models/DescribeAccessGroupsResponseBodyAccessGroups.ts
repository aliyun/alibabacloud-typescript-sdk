// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessGroupsResponseBodyAccessGroupsAccessGroup } from "./DescribeAccessGroupsResponseBodyAccessGroupsAccessGroup";


export class DescribeAccessGroupsResponseBodyAccessGroups extends $dara.Model {
  accessGroup?: DescribeAccessGroupsResponseBodyAccessGroupsAccessGroup[];
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: { 'type': 'array', 'itemType': DescribeAccessGroupsResponseBodyAccessGroupsAccessGroup },
    };
  }

  validate() {
    if(Array.isArray(this.accessGroup)) {
      $dara.Model.validateArray(this.accessGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

