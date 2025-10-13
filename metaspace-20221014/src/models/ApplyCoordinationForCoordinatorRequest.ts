// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ApplyCoordinationForCoordinatorRequestCoordinationResourceCandidates extends $dara.Model {
  /**
   * @example
   * alice
   */
  ownerEndUserId?: string;
  /**
   * @example
   * 41fd1254d8f7****
   */
  ownerWyId?: string;
  /**
   * @example
   * ai-ij4a6kd4bn2****
   */
  resourceId?: string;
  /**
   * @example
   * test-resource
   */
  resourceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @example
   * CloudApp
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerEndUserId: 'OwnerEndUserId',
      ownerWyId: 'OwnerWyId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerEndUserId: 'string',
      ownerWyId: 'string',
      resourceId: 'string',
      resourceName: 'string',
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

export class ApplyCoordinationForCoordinatorRequest extends $dara.Model {
  coordinationResourceCandidates?: ApplyCoordinationForCoordinatorRequestCoordinationResourceCandidates[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ADMIN_INITIATE
   */
  initiatorType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * client-uuid-12345
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      coordinationResourceCandidates: 'CoordinationResourceCandidates',
      initiatorType: 'InitiatorType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinationResourceCandidates: { 'type': 'array', 'itemType': ApplyCoordinationForCoordinatorRequestCoordinationResourceCandidates },
      initiatorType: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.coordinationResourceCandidates)) {
      $dara.Model.validateArray(this.coordinationResourceCandidates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

