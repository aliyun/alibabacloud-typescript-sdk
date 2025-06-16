// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntries } from "./CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntries";
import { CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntries } from "./CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntries";
import { CreateNetworkAclResponseBodyNetworkAclAttributeResources } from "./CreateNetworkAclResponseBodyNetworkAclAttributeResources";


export class CreateNetworkAclResponseBodyNetworkAclAttribute extends $dara.Model {
  /**
   * @remarks
   * The time when the network ACL was created.
   * 
   * @example
   * 2021-12-25 11:33:27
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
   * The outbound rules.
   */
  egressAclEntries?: CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntries;
  /**
   * @remarks
   * The inbound rules.
   */
  ingressAclEntries?: CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntries;
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * nacl-a2do9e413e0spdefr****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The name of the network ACL.
   * 
   * @example
   * acl-1
   */
  networkAclName?: string;
  /**
   * @remarks
   * The region ID of the network ACL.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The information about the associated resources.
   */
  resources?: CreateNetworkAclResponseBodyNetworkAclAttributeResources;
  /**
   * @remarks
   * The status of the network ACL. Valid values:
   * 
   * *   **Available**
   * *   **Modifying**
   * 
   * @example
   * Modifying
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC to which the network ACL belongs.
   * 
   * @example
   * vpc-a2d33rfpl72k5xsscd****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      egressAclEntries: 'EgressAclEntries',
      ingressAclEntries: 'IngressAclEntries',
      networkAclId: 'NetworkAclId',
      networkAclName: 'NetworkAclName',
      regionId: 'RegionId',
      resources: 'Resources',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      egressAclEntries: CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntries,
      ingressAclEntries: CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntries,
      networkAclId: 'string',
      networkAclName: 'string',
      regionId: 'string',
      resources: CreateNetworkAclResponseBodyNetworkAclAttributeResources,
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.egressAclEntries && typeof (this.egressAclEntries as any).validate === 'function') {
      (this.egressAclEntries as any).validate();
    }
    if(this.ingressAclEntries && typeof (this.ingressAclEntries as any).validate === 'function') {
      (this.ingressAclEntries as any).validate();
    }
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

