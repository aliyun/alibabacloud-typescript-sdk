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

