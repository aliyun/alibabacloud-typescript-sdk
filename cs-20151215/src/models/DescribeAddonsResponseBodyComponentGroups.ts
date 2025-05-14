// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAddonsResponseBodyComponentGroupsItems } from "./DescribeAddonsResponseBodyComponentGroupsItems";


export class DescribeAddonsResponseBodyComponentGroups extends $dara.Model {
  /**
   * @remarks
   * The name of the component group.
   * 
   * @example
   * storage
   */
  groupName?: string;
  /**
   * @remarks
   * The names of the components in the component group.
   */
  items?: DescribeAddonsResponseBodyComponentGroupsItems[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'group_name',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      items: { 'type': 'array', 'itemType': DescribeAddonsResponseBodyComponentGroupsItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

