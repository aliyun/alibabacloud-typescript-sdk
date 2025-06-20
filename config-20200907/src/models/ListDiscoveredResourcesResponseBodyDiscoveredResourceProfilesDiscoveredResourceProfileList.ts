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
   * The zone ID.
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
   * *   0: The resource is deleted.
   * *   1: The resource is retained.
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
   * The status of the resource. The value of this parameter varies based on the resource type and may be empty. Examples:
   * 
   * *   If the ResourceType parameter is set to ACS::ECS::Instance, the resource is an Elastic Compute Service (ECS) instance that has a specific state. In this case, the valid values of this parameter are Running and Stopped.
   * *   If the ResourceType parameter is ACS::OSS::Bucket, the resource is an Object Storage Service (OSS) bucket that is not in a specific state. In this case, this parameter is left empty.
   * 
   * @example
   * InUse
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The type of the resource.
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
   * The time when the resource was last updated. The value must be a timestamp in milliseconds.
   * 
   * @example
   * 1722441600000
   */
  updateTime?: number;
  /**
   * @remarks
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

