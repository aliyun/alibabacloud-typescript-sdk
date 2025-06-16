// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry } from "./DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry";


export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntries extends $dara.Model {
  egressAclEntry?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      egressAclEntry: 'EgressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressAclEntry: { 'type': 'array', 'itemType': DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry },
    };
  }

  validate() {
    if(Array.isArray(this.egressAclEntry)) {
      $dara.Model.validateArray(this.egressAclEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

