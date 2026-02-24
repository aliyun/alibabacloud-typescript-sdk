// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the resource. We recommend that you use the ResourceOwnerId parameter.
   * 
   * @example
   * 161259599160****
   */
  accountId?: number;
  /**
   * @remarks
   * The zone where the resource resides.
   * 
   * @example
   * cn-huhehaote-a
   */
  availabilityZone?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-huhehaote
   */
  region?: string;
  /**
   * @remarks
   * The timestamp when the resource was created. Unit: milliseconds.
   * 
   * @example
   * 1618675206000
   */
  resourceCreationTime?: number;
  /**
   * @remarks
   * The status of the resource. Valid values:
   * 
   * - 0: The resource is deleted.
   * 
   * - 1: The resource is in use.
   * 
   * @example
   * 1
   */
  resourceDeleted?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * eni-hp31cqoba96jagtz****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * Cloud Firewall
   */
  resourceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the resource.
   * 
   * @example
   * 161259599160****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the resource. The status of a resource is defined by the corresponding Alibaba Cloud service. This parameter can be empty. For example:
   * 
   * - If the resource type is ACS::ECS::Instance, the resource is stateful. The value of this parameter can be Running or Stopped.
   * 
   * - If the resource type is ACS::OSS::Bucket, the resource is stateless. The value of this parameter is empty.
   * 
   * @example
   * InUse
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ECS::NetworkInterface
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource tags.
   * 
   * @example
   * {\\"key1\\":[\\"value2\\"]}
   */
  tags?: string;
  /**
   * @remarks
   * The timestamp of the last update to the resource. This is a timestamp in milliseconds.
   * 
   * @example
   * 1722441600000
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the resource belongs. The format is vsw-t4n7pokxxxxxxxxxxxxxx. If the resource belongs to multiple vSwitches, the vSwitch IDs are separated by commas (,). An empty string is returned if the resource does not belong to a vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-t4n7pokxxxxxxxxxxxxxx
   * 
   * **if can be null:**
   * true
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The resource build version.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The ID of the VPC to which the resource belongs. The format is vpc-t4nhheyvay74fp7n0hxxx. An empty string is returned if the resource does not belong to a VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-t4nhheyvay74fp7n0hxxx
   * 
   * **if can be null:**
   * true
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      tags: 'Tags',
      updateTime: 'UpdateTime',
      vSwitchId: 'VSwitchId',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      availabilityZone: 'string',
      region: 'string',
      resourceCreationTime: 'number',
      resourceDeleted: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceStatus: 'string',
      resourceType: 'string',
      tags: 'string',
      updateTime: 'number',
      vSwitchId: 'string',
      version: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfiles extends $dara.Model {
  /**
   * @remarks
   * The details of the resources.
   */
  discoveredResourceProfileList?: ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceProfileList: 'DiscoveredResourceProfileList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceProfileList: { 'type': 'array', 'itemType': ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.discoveredResourceProfileList)) {
      $dara.Model.validateArray(this.discoveredResourceProfileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateDiscoveredResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of resources.
   */
  discoveredResourceProfiles?: ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfiles;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7817373-78CB-4F9A-8AFA-E7A88E9D64A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceProfiles: 'DiscoveredResourceProfiles',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceProfiles: ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfiles,
      requestId: 'string',
    };
  }

  validate() {
    if(this.discoveredResourceProfiles && typeof (this.discoveredResourceProfiles as any).validate === 'function') {
      (this.discoveredResourceProfiles as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

