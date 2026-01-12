// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchModifyEntitlementResponseBodyEntitlementsAssignModels extends $dara.Model {
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-e94kzikmpljjx99pl
   */
  desktopId?: string;
  /**
   * @remarks
   * The authorized user IDs for the cloud computer.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The assign result for each cloud computer.
   * 
   * Valid values:
   * 
   * *   FAILED
   * *   NOT_STARTED
   * *   STARTED
   * *   PROCESSING
   * *   FINISHED
   * 
   * @example
   * FINISHED
   */
  innerStatus?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endUserIds: 'EndUserIds',
      innerStatus: 'InnerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      innerStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchModifyEntitlementResponseBodyEntitlements extends $dara.Model {
  /**
   * @remarks
   * The assignment results.
   */
  assignModels?: BatchModifyEntitlementResponseBodyEntitlementsAssignModels[];
  /**
   * @remarks
   * The result.
   * 
   * Valid values:
   * 
   * *   FAILED
   * *   NOT_STARTED
   * *   STARTED
   * *   PROCESSING
   * *   FINISHED
   * 
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * B2F4F018-0EDF-159C-B285-117B5F1C****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      assignModels: 'AssignModels',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignModels: { 'type': 'array', 'itemType': BatchModifyEntitlementResponseBodyEntitlementsAssignModels },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignModels)) {
      $dara.Model.validateArray(this.assignModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchModifyEntitlementResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results.
   */
  entitlements?: BatchModifyEntitlementResponseBodyEntitlements;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51592A88-0F2C-55E6-AD2C-2AD9C10D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entitlements: 'Entitlements',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entitlements: BatchModifyEntitlementResponseBodyEntitlements,
      requestId: 'string',
    };
  }

  validate() {
    if(this.entitlements && typeof (this.entitlements as any).validate === 'function') {
      (this.entitlements as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

