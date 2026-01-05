// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProvisionedProductPlanApproversResponseBodyApprovers extends $dara.Model {
  /**
   * @remarks
   * The name of the reviewer.
   * 
   * @example
   * approver-1
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the Resource Access Management (RAM) entity of the reviewer. Valid values:
   * 
   * *   RamUser: a RAM user
   * *   RamRole: a RAM role
   * 
   * @example
   * RamUser
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalName: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlanApproversResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of reviewers.
   */
  approvers?: ListProvisionedProductPlanApproversResponseBodyApprovers[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      approvers: 'Approvers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvers: { 'type': 'array', 'itemType': ListProvisionedProductPlanApproversResponseBodyApprovers },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approvers)) {
      $dara.Model.validateArray(this.approvers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

