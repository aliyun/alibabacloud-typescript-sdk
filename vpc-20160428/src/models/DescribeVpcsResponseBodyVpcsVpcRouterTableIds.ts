// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsResponseBodyVpcsVpcRouterTableIds extends $dara.Model {
  routerTableIds?: string[];
  static names(): { [key: string]: string } {
    return {
      routerTableIds: 'RouterTableIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routerTableIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.routerTableIds)) {
      $dara.Model.validateArray(this.routerTableIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

