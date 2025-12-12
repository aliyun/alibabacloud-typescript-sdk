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
   * The name of the cloud service to which the check item belongs.
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
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 169946124551****
   */
  accountId?: string;
  /**
   * @remarks
   * The start time of the deletion.
   * 
   * @example
   * 2022-08-23T17:05:30+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The end time of the deletion.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-23T17:06:01+08:00
   */
  deletionTime?: string;
  /**
   * @remarks
   * The type of the deletion. Valid values:
   * 
   * *   0: direct deletion. If the member does not have pay-as-you-go resources that are purchased within the previous 30 days, the system directly deletes the member.
   * *   1: deletion with a silence period. If the member has pay-as-you-go resources that are purchased within the previous 30 days, the member enters a silence period. The system starts to delete the member until the silence period ends. For more information about the silence period, see [What is the silence period for member deletion?](https://help.aliyun.com/document_detail/446079.html)
   * 
   * @example
   * 0
   */
  deletionType?: string;
  /**
   * @remarks
   * The reasons why the member fails to be deleted.
   */
  failReasonList?: GetAccountDeletionStatusResponseBodyRdAccountDeletionStatusFailReasonList[];
  /**
   * @remarks
   * The status. Valid values:
   * 
   * *   Success: The member is deleted.
   * *   Checking: A deletion check is being performed for the member.
   * *   Deleting: The member is being deleted.
   * *   CheckFailed: The deletion check for the member fails.
   * *   DeleteFailed: The member fails to be deleted.
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
   * The deletion status of the member.
   */
  rdAccountDeletionStatus?: GetAccountDeletionStatusResponseBodyRdAccountDeletionStatus;
  /**
   * @remarks
   * The ID of the request.
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

