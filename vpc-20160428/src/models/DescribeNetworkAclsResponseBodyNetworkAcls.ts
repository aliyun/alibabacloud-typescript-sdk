// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkAclsResponseBodyNetworkAclsNetworkAcl } from "./DescribeNetworkAclsResponseBodyNetworkAclsNetworkAcl";


export class DescribeNetworkAclsResponseBodyNetworkAcls extends $dara.Model {
  networkAcl?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAcl[];
  static names(): { [key: string]: string } {
    return {
      networkAcl: 'NetworkAcl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAcl: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsNetworkAcl },
    };
  }

  validate() {
    if(Array.isArray(this.networkAcl)) {
      $dara.Model.validateArray(this.networkAcl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

