// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 161259599160****
   */
  accountId?: number;
  /**
   * @remarks
   * The availability zone of the resource.
   * 
   * @example
   * cn-hangzhou-h
   */
  availabilityZone?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The time when the resource was created. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1618675206000
   */
  resourceCreationTime?: number;
  /**
   * @remarks
   * The status of the resource. Valid values:
   * 
   * - 0: Deleted.
   * 
   * - 1: Active.
   * 
   * @example
   * 1
   */
  resourceDeleted?: number;
  /**
   * @remarks
   * The ID of the resource group to which the resource belongs. Example: rg-acfmvoh45rhxxxx
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmvoh45rhxxxx
   * 
   * **if can be null:**
   * true
   */
  resourceGroupId?: string;
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
   * The status of the resource. The status is defined by the corresponding Alibaba Cloud service. This parameter can be empty. For example:
   * 
   * - If the resource type is ACS::ECS::Instance, the resource is stateful. The value can be Running or Stopped.
   * 
   * - If the resource type is ACS::OSS::Bucket, the resource is stateless. The value is empty.
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
   * The tags of the resource.
   * 
   * @example
   * {\\"key1\\":[\\"value2\\"]}
   */
  tags?: string;
  /**
   * @remarks
   * The time when the resource was last updated. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1722441600000
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the resource belongs. Multiple vSwitch IDs are separated by commas (,). An empty string ("") is returned if the resource does not belong to a vSwitch.
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
   * The version of the resource change.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the resource belongs. An empty string ("") is returned if the resource does not belong to a VPC.
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
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
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
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
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

export class ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles extends $dara.Model {
  /**
   * @remarks
   * The details of the resources.
   */
  discoveredResourceProfileList?: ListDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList[];
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
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
      discoveredResourceProfileList: { 'type': 'array', 'itemType': ListDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList },
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

export class ListDiscoveredResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of resources.
   */
  discoveredResourceProfiles?: ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles;
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
      discoveredResourceProfiles: ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles,
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

