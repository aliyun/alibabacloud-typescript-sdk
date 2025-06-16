// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry } from "./CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry";


export class CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntries extends $dara.Model {
  egressAclEntry?: CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      egressAclEntry: 'EgressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressAclEntry: { 'type': 'array', 'itemType': CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry },
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

