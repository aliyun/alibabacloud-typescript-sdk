// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCoordinationForMonitoringRequestResourceCandidates extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the current cloud desktop belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 130247021517****
   */
  ownerAliUid?: number;
  /**
   * @remarks
   * The ID of the current end user.
   * 
   * @example
   * alice
   */
  ownerEndUserId?: string;
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-08zhejm3h7ilr****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * This parameter is required.
   * 
   * @example
   * TestDesktop
   */
  resourceName?: string;
  /**
   * @remarks
   * The properties of the cloud desktop.
   * 
   * @example
   * TestProperty
   */
  resourceProperties?: string;
  /**
   * @remarks
   * The region where the resource resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Set the value to CLOUD_DESKTOP.
   * 
   * *   The value CLOUD_DESKTOP specifies that the resource is a cloud desktop.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAliUid: 'OwnerAliUid',
      ownerEndUserId: 'OwnerEndUserId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceProperties: 'ResourceProperties',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAliUid: 'number',
      ownerEndUserId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceProperties: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationForMonitoringRequest extends $dara.Model {
  /**
   * @remarks
   * The coordination policy.
   * 
   * Set the value to FULL_CONTROL.
   * 
   * *   The value FULL_CONTROL specifies that the cloud desktop is shared and remote access to the cloud desktop is allowed.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * FULL_CONTROL
   */
  coordinatePolicyType?: string;
  /**
   * @remarks
   * The ID of the end user who initiates the stream collaboration. If the initiator is the administrator, do not specify this parameter.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The type of the initiator.
   * 
   * Set the value to ADMIN_INITIATE.
   * 
   * *   The value ADMIN_INITIATE specifies that the administrator initiates the coordination request.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * ADMIN_INITIATE
   */
  initiatorType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://next.api.aliyun.com/document/ecd/2020-09-30/DescribeRegions) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of cloud desktops that run the collaboration task at the same time.
   * 
   * This parameter is required.
   */
  resourceCandidates?: ApplyCoordinationForMonitoringRequestResourceCandidates[];
  /**
   * @remarks
   * The universally unique identifier (UUID) of the device.
   * 
   * This parameter is required.
   * 
   * @example
   * 62f2f1f252f04e0e9d8bc****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      coordinatePolicyType: 'CoordinatePolicyType',
      endUserId: 'EndUserId',
      initiatorType: 'InitiatorType',
      regionId: 'RegionId',
      resourceCandidates: 'ResourceCandidates',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinatePolicyType: 'string',
      endUserId: 'string',
      initiatorType: 'string',
      regionId: 'string',
      resourceCandidates: { 'type': 'array', 'itemType': ApplyCoordinationForMonitoringRequestResourceCandidates },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceCandidates)) {
      $dara.Model.validateArray(this.resourceCandidates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

