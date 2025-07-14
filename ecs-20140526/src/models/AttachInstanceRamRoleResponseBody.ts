// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResultsAttachInstanceRamRoleResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance RAM role was attached. If the instance RAM role was attached, 200 is returned. If the instance RAM role failed to be attached, any other value is returned. For more information, see the "Error codes" section.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp10ws62o04ubhvi****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the instance RAM role was attached. If the instance RAM role was attached, success is returned. If the instance RAM role failed to be attached, any other value is returned. For more information, see the "Error codes" section.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the instance RAM role was attached.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResults extends $dara.Model {
  attachInstanceRamRoleResult?: AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResultsAttachInstanceRamRoleResult[];
  static names(): { [key: string]: string } {
    return {
      attachInstanceRamRoleResult: 'AttachInstanceRamRoleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInstanceRamRoleResult: { 'type': 'array', 'itemType': AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResultsAttachInstanceRamRoleResult },
    };
  }

  validate() {
    if(Array.isArray(this.attachInstanceRamRoleResult)) {
      $dara.Model.validateArray(this.attachInstanceRamRoleResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstanceRamRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the results of attaching the instance RAM role.
   */
  attachInstanceRamRoleResults?: AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResults;
  /**
   * @remarks
   * The number of instances to which the instance RAM role failed to be attached.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The name of the instance RAM role.
   * 
   * @example
   * testRamRoleName
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9553E4C-6C3A-4D66-AE79-9835AF705639
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances to which you attempted to attach the instance RAM role.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      attachInstanceRamRoleResults: 'AttachInstanceRamRoleResults',
      failCount: 'FailCount',
      ramRoleName: 'RamRoleName',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInstanceRamRoleResults: AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResults,
      failCount: 'number',
      ramRoleName: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.attachInstanceRamRoleResults && typeof (this.attachInstanceRamRoleResults as any).validate === 'function') {
      (this.attachInstanceRamRoleResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

