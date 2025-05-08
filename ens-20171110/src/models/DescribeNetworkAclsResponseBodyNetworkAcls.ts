// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkAclsResponseBodyNetworkAclsEgressAclEntries } from "./DescribeNetworkAclsResponseBodyNetworkAclsEgressAclEntries";
import { DescribeNetworkAclsResponseBodyNetworkAclsIngressAclEntries } from "./DescribeNetworkAclsResponseBodyNetworkAclsIngressAclEntries";
import { DescribeNetworkAclsResponseBodyNetworkAclsResources } from "./DescribeNetworkAclsResponseBodyNetworkAclsResources";


export class DescribeNetworkAclsResponseBodyNetworkAcls extends $dara.Model {
  /**
   * @remarks
   * The time when the network ACL was created. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-01T06:08:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the network ACL.
   * 
   * @example
   * This is my NetworkAcl.
   */
  description?: string;
  /**
   * @remarks
   * Details of the outbound rules.
   */
  egressAclEntries?: DescribeNetworkAclsResponseBodyNetworkAclsEgressAclEntries[];
  /**
   * @remarks
   * Details of the inbound rules.
   */
  ingressAclEntries?: DescribeNetworkAclsResponseBodyNetworkAclsIngressAclEntries[];
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * nacl-a2do9e413e0spxscd****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The name of the network ACL.
   * 
   * @example
   * acl-8
   */
  networkAclName?: string;
  /**
   * @remarks
   * Details of the associated resources.
   */
  resources?: DescribeNetworkAclsResponseBodyNetworkAclsResources[];
  /**
   * @remarks
   * The status of the network ACL. Valid values:
   * 
   * *   **Available**: The network ACL is available.
   * *   **Modifying**: The network ACL is being configured.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      egressAclEntries: 'EgressAclEntries',
      ingressAclEntries: 'IngressAclEntries',
      networkAclId: 'NetworkAclId',
      networkAclName: 'NetworkAclName',
      resources: 'Resources',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      egressAclEntries: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsEgressAclEntries },
      ingressAclEntries: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsIngressAclEntries },
      networkAclId: 'string',
      networkAclName: 'string',
      resources: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsResources },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.egressAclEntries)) {
      $dara.Model.validateArray(this.egressAclEntries);
    }
    if(Array.isArray(this.ingressAclEntries)) {
      $dara.Model.validateArray(this.ingressAclEntries);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

