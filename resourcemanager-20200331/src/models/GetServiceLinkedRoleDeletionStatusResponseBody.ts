// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsageResources extends $dara.Model {
  resource?: string[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsage extends $dara.Model {
  /**
   * @remarks
   * The region.
   * 
   * @example
   * global
   */
  region?: string;
  /**
   * @remarks
   * The information about resources.
   */
  resources?: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsageResources;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resources: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsageResources,
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsages extends $dara.Model {
  roleUsage?: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsage[];
  static names(): { [key: string]: string } {
    return {
      roleUsage: 'RoleUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleUsage: { 'type': 'array', 'itemType': GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsage },
    };
  }

  validate() {
    if(Array.isArray(this.roleUsage)) {
      $dara.Model.validateArray(this.roleUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseBodyReason extends $dara.Model {
  /**
   * @remarks
   * The failure information.
   * 
   * @example
   * Service-Linked Role acs:ram::196813227629****:role/aliyunserviceroleforhdr cannot be deleted as it is in use by hdr.aliyuncs.com.
   */
  message?: string;
  /**
   * @remarks
   * The information about the resources that the service-linked role can use.
   */
  roleUsages?: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsages;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      roleUsages: 'RoleUsages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      roleUsages: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsages,
    };
  }

  validate() {
    if(this.roleUsages && typeof (this.roleUsages as any).validate === 'function') {
      (this.roleUsages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cause for the failure of the deletion task.
   */
  reason?: GetServiceLinkedRoleDeletionStatusResponseBodyReason;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 07194EB1-DB50-4513-A51D-99B30D635AEF
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * *   SUCCEEDED
   * *   IN_PROGRESS
   * *   FAILED
   * *   NOT_STARTED
   * *   INTERNAL_ERROR
   * 
   * @example
   * FAILED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: GetServiceLinkedRoleDeletionStatusResponseBodyReason,
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.reason && typeof (this.reason as any).validate === 'function') {
      (this.reason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

