// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs. We recommend that you use the ResourceOwnerId parameter.
   * 
   * @example
   * 161259599160****
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the zone in which the resource resides.
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
   * The time when the resource was created. Unit: milliseconds.
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
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 161259599160****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the resource. The value of this parameter varies with the resource type and may be empty. Examples:
   * 
   * *   If the value of the ResourceType parameter is ACS::ECS::Instance, the resource is an Elastic Compute Service (ECS) instance that is in a specific state. In this case, the valid values of this parameter are Running and Stopped.
   * *   If the value of the ResourceType parameter is ACS::OSS::Bucket, the resource is an Object Storage Service (OSS) bucket that is not in a specific state. In this case, this parameter is empty.
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
   * The time when the resource was last updated. The value must be a timestamp in milliseconds.
   * 
   * @example
   * 1722441600000
   */
  updateTime?: number;
  /**
   * @remarks
   * The build version of the resource.
   * 
   * @example
   * 1
   */
  version?: number;
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
      version: 'Version',
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
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

