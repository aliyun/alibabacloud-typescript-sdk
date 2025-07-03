// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityIpsResponseBodyDataGroupItems } from "./DescribeSecurityIpsResponseBodyDataGroupItems";


export class DescribeSecurityIpsResponseBodyData extends $dara.Model {
  /**
   * @example
   * pxc-hzjasd****
   */
  DBInstanceName?: string;
  groupItems?: DescribeSecurityIpsResponseBodyDataGroupItems[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      groupItems: 'GroupItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      groupItems: { 'type': 'array', 'itemType': DescribeSecurityIpsResponseBodyDataGroupItems },
    };
  }

  validate() {
    if(Array.isArray(this.groupItems)) {
      $dara.Model.validateArray(this.groupItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

