// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceType } from "./DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceType";


export class DescribeRouterInterfacesResponseBodyRouterInterfaceSet extends $dara.Model {
  routerInterfaceType?: DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceType[];
  static names(): { [key: string]: string } {
    return {
      routerInterfaceType: 'RouterInterfaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routerInterfaceType: { 'type': 'array', 'itemType': DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceType },
    };
  }

  validate() {
    if(Array.isArray(this.routerInterfaceType)) {
      $dara.Model.validateArray(this.routerInterfaceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

