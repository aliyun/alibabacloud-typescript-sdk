// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountDeletionStatusResponseBodyRdAccountDeletionStatusFailReasonList extends $dara.Model {
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * This account has a payer account. Please release the financial relationship of this account first.
   */
  description?: string;
  /**
   * @remarks
   * The service name of the cloud service to which the check item belongs.
   * 
   * @example
   * Others
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionStatusResponseBodyRdAccountDeletionStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the member account.
   * 
   * @example
   * 169946124551****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the deletion started, in RFC 3339 format with a UTC offset of +08:00.
   * 
   * @example
   * 2022-08-23T17:05:30+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the deletion ended, in RFC 3339 format with a UTC offset of +08:00.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-23T17:06:01+08:00
   */
  deletionTime?: string;
  /**
   * @remarks
   * The deletion type. Valid values:
   * 
   * - 0: direct deletion. If the member account has no pay-as-you-go resources in the last 30 days, the system directly deletes the member account.
   * - 1: cool-down period deletion. If the member account has pay-as-you-go resources in the last 30 days, the member account enters a cool-down period. The system starts to delete the member account after the cool-down period ends. For more information about the cool-down period, see [What is the cool-down period for member account deletion](https://help.aliyun.com/document_detail/446079.html).
   * 
   * @example
   * 0
   */
  deletionType?: string;
  /**
   * @remarks
   * The reasons for the deletion failure.
   */
  failReasonList?: GetAccountDeletionStatusResponseBodyRdAccountDeletionStatusFailReasonList[];
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - Success: The member account is deleted.
   * - Checking: The check is in progress.
   * - Deleting: The deletion is in progress.
   * - CheckFailed: The check failed.
   * - DeleteFailed: The deletion failed.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createTime: 'CreateTime',
      deletionTime: 'DeletionTime',
      deletionType: 'DeletionType',
      failReasonList: 'FailReasonList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createTime: 'string',
      deletionTime: 'string',
      deletionType: 'string',
      failReasonList: { 'type': 'array', 'itemType': GetAccountDeletionStatusResponseBodyRdAccountDeletionStatusFailReasonList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failReasonList)) {
      $dara.Model.validateArray(this.failReasonList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deletion status of the member account.
   */
  rdAccountDeletionStatus?: GetAccountDeletionStatusResponseBodyRdAccountDeletionStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8AA43293-7C8F-5730-8F2D-7F864EC092C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      rdAccountDeletionStatus: 'RdAccountDeletionStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdAccountDeletionStatus: GetAccountDeletionStatusResponseBodyRdAccountDeletionStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.rdAccountDeletionStatus && typeof (this.rdAccountDeletionStatus as any).validate === 'function') {
      (this.rdAccountDeletionStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

