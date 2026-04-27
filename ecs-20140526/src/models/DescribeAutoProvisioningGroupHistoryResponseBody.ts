// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailCreatedInstanceIds extends $dara.Model {
  createdInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      createdInstanceId: 'CreatedInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.createdInstanceId)) {
      $dara.Model.validateArray(this.createdInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailDestroyedInstanceIds extends $dara.Model {
  destroyedInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      destroyedInstanceId: 'DestroyedInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destroyedInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destroyedInstanceId)) {
      $dara.Model.validateArray(this.destroyedInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailErrorMessagesErrorMessageFailedInstanceIds extends $dara.Model {
  failedInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      failedInstanceId: 'FailedInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedInstanceId)) {
      $dara.Model.validateArray(this.failedInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailErrorMessagesErrorMessage extends $dara.Model {
  /**
   * @example
   * InvalidSecurityGroupId.NotFound
   */
  code?: string;
  failedInstanceIds?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailErrorMessagesErrorMessageFailedInstanceIds;
  /**
   * @example
   * The specified SecurityGroupId "sg-bp1d8modxxxxx" is not found.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failedInstanceIds: 'FailedInstanceIds',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failedInstanceIds: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailErrorMessagesErrorMessageFailedInstanceIds,
      message: 'string',
    };
  }

  validate() {
    if(this.failedInstanceIds && typeof (this.failedInstanceIds as any).validate === 'function') {
      (this.failedInstanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailErrorMessages extends $dara.Model {
  errorMessage?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailErrorMessagesErrorMessage[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailErrorMessagesErrorMessage },
    };
  }

  validate() {
    if(Array.isArray(this.errorMessage)) {
      $dara.Model.validateArray(this.errorMessage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetail extends $dara.Model {
  createdInstanceIds?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailCreatedInstanceIds;
  destroyedInstanceIds?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailDestroyedInstanceIds;
  detail?: string;
  errorMessages?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailErrorMessages;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createdInstanceIds: 'CreatedInstanceIds',
      destroyedInstanceIds: 'DestroyedInstanceIds',
      detail: 'Detail',
      errorMessages: 'ErrorMessages',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdInstanceIds: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailCreatedInstanceIds,
      destroyedInstanceIds: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailDestroyedInstanceIds,
      detail: 'string',
      errorMessages: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetailErrorMessages,
      status: 'string',
    };
  }

  validate() {
    if(this.createdInstanceIds && typeof (this.createdInstanceIds as any).validate === 'function') {
      (this.createdInstanceIds as any).validate();
    }
    if(this.destroyedInstanceIds && typeof (this.destroyedInstanceIds as any).validate === 'function') {
      (this.destroyedInstanceIds as any).validate();
    }
    if(this.errorMessages && typeof (this.errorMessages as any).validate === 'function') {
      (this.errorMessages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetails extends $dara.Model {
  activityDetail?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetail[];
  static names(): { [key: string]: string } {
    return {
      activityDetail: 'ActivityDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityDetail: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetailsActivityDetail },
    };
  }

  validate() {
    if(Array.isArray(this.activityDetail)) {
      $dara.Model.validateArray(this.activityDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory extends $dara.Model {
  activityDetails?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetails;
  lastEventTime?: string;
  startTime?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      activityDetails: 'ActivityDetails',
      lastEventTime: 'LastEventTime',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityDetails: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistoryActivityDetails,
      lastEventTime: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.activityDetails && typeof (this.activityDetails as any).validate === 'function') {
      (this.activityDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistories extends $dara.Model {
  autoProvisioningGroupHistory?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory[];
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupHistory: 'AutoProvisioningGroupHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupHistory: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory },
    };
  }

  validate() {
    if(Array.isArray(this.autoProvisioningGroupHistory)) {
      $dara.Model.validateArray(this.autoProvisioningGroupHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupHistoryResponseBody extends $dara.Model {
  autoProvisioningGroupHistories?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistories;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B48A12CD-1295-4A38-A8F0-0E92C937****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of queried scheduling tasks in the auto provisioning group.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupHistories: 'AutoProvisioningGroupHistories',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupHistories: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistories,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.autoProvisioningGroupHistories && typeof (this.autoProvisioningGroupHistories as any).validate === 'function') {
      (this.autoProvisioningGroupHistories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

