// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry } from "./CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry";


export class CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntries extends $dara.Model {
  ingressAclEntry?: CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      ingressAclEntry: 'IngressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressAclEntry: { 'type': 'array', 'itemType': CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry },
    };
  }

  validate() {
    if(Array.isArray(this.ingressAclEntry)) {
      $dara.Model.validateArray(this.ingressAclEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

