// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCoordinationForMonitoringRequestResourceCandidates extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the cloud computer administrator.
   * 
   * This parameter is required.
   * 
   * @example
   * 130247021517****
   */
  ownerAliUid?: number;
  /**
   * @remarks
   * The username of the current user of the cloud computer.
   * 
   * > This field is required.
   * 
   * @example
   * alice
   */
  ownerEndUserId?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-08zhejm3h7ilr****
   */
  resourceId?: string;
  /**
   * @remarks
   * The cloud computer name.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoComputer
   */
  resourceName?: string;
  /**
   * @remarks
   * The properties of the cloud computer.
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
   * The access policy during the remote assistance procedure.
   * 
   * This parameter is required.
   * 
   * @example
   * FULL_CONTROL
   */
  coordinatePolicyType?: string;
  /**
   * @remarks
   * The ID of the end user who initiates the coordination flow. This parameter is not required if the request is initiated by an administrator.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The initiator type.
   * 
   * @example
   * ADMIN_INITIATE
   */
  initiatorType?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of cloud computers that need to accept remote assistance.
   * 
   * This parameter is required.
   */
  resourceCandidates?: ApplyCoordinationForMonitoringRequestResourceCandidates[];
  /**
   * @remarks
   * The UUID (unique identifier) of the device.
   * 
   * This parameter is required.
   * 
   * @example
   * 3E14A18BD4D088504B9F8A8751AB****
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

