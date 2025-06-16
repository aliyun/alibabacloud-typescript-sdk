// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntries } from "./DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntries";
import { DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntries } from "./DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntries";
import { DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResources } from "./DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResources";
import { DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeTags } from "./DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeTags";


export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttribute extends $dara.Model {
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
   * The information about the outbound rules of the network ACL.
   */
  egressAclEntries?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntries;
  /**
   * @remarks
   * The information about the inbound rules of the network ACL.
   */
  ingressAclEntries?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntries;
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * nacl-a2do9e413e0spnhmj****
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
   * The ID of the Alibaba Cloud account to which the network ACL belongs.
   * 
   * @example
   * 253460731706911258
   */
  ownerId?: number;
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
   * The resources that are associated with the network ACL.
   */
  resources?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResources;
  /**
   * @remarks
   * The association status of the resource. Valid values:
   * 
   * *   **Available**
   * *   **Modifying**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The information about the tags.
   */
  tags?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeTags;
  /**
   * @remarks
   * The ID of the VPC to which the network ACL belongs.
   * 
   * @example
   * vpc-a2d33rfpl72k5defr****
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
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resources: 'Resources',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      egressAclEntries: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntries,
      ingressAclEntries: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntries,
      networkAclId: 'string',
      networkAclName: 'string',
      ownerId: 'number',
      regionId: 'string',
      resources: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResources,
      status: 'string',
      tags: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeTags,
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
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

