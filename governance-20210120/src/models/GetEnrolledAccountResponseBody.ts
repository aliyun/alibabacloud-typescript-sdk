// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEnrolledAccountResponseBodyBaselineItems } from "./GetEnrolledAccountResponseBodyBaselineItems";
import { GetEnrolledAccountResponseBodyErrorInfo } from "./GetEnrolledAccountResponseBodyErrorInfo";
import { GetEnrolledAccountResponseBodyInputs } from "./GetEnrolledAccountResponseBodyInputs";
import { GetEnrolledAccountResponseBodyProgress } from "./GetEnrolledAccountResponseBodyProgress";


export class GetEnrolledAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 12868156179*****
   */
  accountUid?: number;
  /**
   * @remarks
   * The ID of the baseline that is implemented.
   * 
   * @example
   * afb-bp1adadfadsf***
   */
  baselineId?: string;
  /**
   * @remarks
   * The array that contains baseline items.
   */
  baselineItems?: GetEnrolledAccountResponseBodyBaselineItems[];
  /**
   * @remarks
   * The time when the account was created.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * test-account
   */
  displayName?: string;
  /**
   * @remarks
   * The error message.
   * 
   * >  This parameter is returned if the value of `Status` is `Failed` or `ScheduleFailed`.
   */
  errorInfo?: GetEnrolledAccountResponseBodyErrorInfo;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * fd-5ESoku****
   */
  folderId?: string;
  /**
   * @remarks
   * Indicates whether the initialization is complete. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  initialized?: boolean;
  /**
   * @remarks
   * Input parameters used to create an account.
   */
  inputs?: GetEnrolledAccountResponseBodyInputs;
  /**
   * @remarks
   * The ID of the management account of the resource directory to which the account belongs.
   * 
   * @example
   * 19534534552*****
   */
  masterAccountUid?: number;
  /**
   * @remarks
   * The ID of the settlement account.
   * 
   * @example
   * 19534534552*****
   */
  payerAccountUid?: number;
  /**
   * @remarks
   * The progress of the applying the baseline to the account.
   */
  progress?: GetEnrolledAccountResponseBodyProgress[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 768F908D-A66A-5A5D-816C-20C93CBBFEE3
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * *   Pending: The account is pending to be created.
   * *   Running: The account is being created.
   * *   Finished: The account is created.
   * *   Failed: The account fails to be created.
   * *   Scheduling: The account is being scheduled.
   * *   ScheduleFailed: The account fails to be scheduled.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      createTime: 'CreateTime',
      displayName: 'DisplayName',
      errorInfo: 'ErrorInfo',
      folderId: 'FolderId',
      initialized: 'Initialized',
      inputs: 'Inputs',
      masterAccountUid: 'MasterAccountUid',
      payerAccountUid: 'PayerAccountUid',
      progress: 'Progress',
      requestId: 'RequestId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': GetEnrolledAccountResponseBodyBaselineItems },
      createTime: 'string',
      displayName: 'string',
      errorInfo: GetEnrolledAccountResponseBodyErrorInfo,
      folderId: 'string',
      initialized: 'boolean',
      inputs: GetEnrolledAccountResponseBodyInputs,
      masterAccountUid: 'number',
      payerAccountUid: 'number',
      progress: { 'type': 'array', 'itemType': GetEnrolledAccountResponseBodyProgress },
      requestId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselineItems)) {
      $dara.Model.validateArray(this.baselineItems);
    }
    if(this.errorInfo && typeof (this.errorInfo as any).validate === 'function') {
      (this.errorInfo as any).validate();
    }
    if(this.inputs && typeof (this.inputs as any).validate === 'function') {
      (this.inputs as any).validate();
    }
    if(Array.isArray(this.progress)) {
      $dara.Model.validateArray(this.progress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

