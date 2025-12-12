// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoAbandonableChecks extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * NON_SP_cs
   */
  checkId?: string;
  /**
   * @remarks
   * The name of the cloud service to which the check item belongs.
   * 
   * @example
   * Container Service for Kubernetes
   */
  checkName?: string;
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * An instance of a cloud service is running within the member. Submit a ticket to contact Alibaba Cloud technical support.
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkName: 'CheckName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkName: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoNotAllowReason extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * NON_SP_efc
   */
  checkId?: string;
  /**
   * @remarks
   * The name of the cloud service to which the check item belongs.
   * 
   * @example
   * Enterprise finance
   */
  checkName?: string;
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * This account is an Enterprise Finance associated account. Please remove the financial association of this account before deleting it.
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkName: 'CheckName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkName: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfo extends $dara.Model {
  /**
   * @remarks
   * The check items that you can choose to ignore for the member deletion.
   * 
   * >  This parameter may be returned if the value of AllowDelete is true.
   */
  abandonableChecks?: GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoAbandonableChecks[];
  /**
   * @remarks
   * Indicates whether the member can be deleted. Valid values:
   * 
   * *   true: The member can be deleted.
   * *   false: The member cannot be deleted.
   * 
   * @example
   * false
   */
  allowDelete?: string;
  /**
   * @remarks
   * The reasons why the member cannot be deleted.
   * 
   * >  This parameter is returned only if the value of AllowDelete is false.
   */
  notAllowReason?: GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoNotAllowReason[];
  /**
   * @remarks
   * The status of the check. Valid values:
   * 
   * *   PreCheckComplete: The check is complete.
   * *   PreChecking: The check is in progress.
   * 
   * @example
   * PreCheckComplete
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      abandonableChecks: 'AbandonableChecks',
      allowDelete: 'AllowDelete',
      notAllowReason: 'NotAllowReason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonableChecks: { 'type': 'array', 'itemType': GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoAbandonableChecks },
      allowDelete: 'string',
      notAllowReason: { 'type': 'array', 'itemType': GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoNotAllowReason },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.abandonableChecks)) {
      $dara.Model.validateArray(this.abandonableChecks);
    }
    if(Array.isArray(this.notAllowReason)) {
      $dara.Model.validateArray(this.notAllowReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the deletion check for the member.
   */
  accountDeletionCheckResultInfo?: GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54AC391D-4F7F-5F08-B8D3-0AECDE6EC5BD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDeletionCheckResultInfo: 'AccountDeletionCheckResultInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDeletionCheckResultInfo: GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountDeletionCheckResultInfo && typeof (this.accountDeletionCheckResultInfo as any).validate === 'function') {
      (this.accountDeletionCheckResultInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

