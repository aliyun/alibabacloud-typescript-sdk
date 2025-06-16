// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResourcesResource } from "./DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResourcesResource";


export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResources extends $dara.Model {
  resource?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

