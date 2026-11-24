// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnoseReportsResponseBodyReportsDetails extends $dara.Model {
  /**
   * @remarks
   * The type of the diagnostic item. Valid values:
   * 
   * - AccountArrearage: account overdue payment. Checks whether the user account has overdue payments.
   * 
   * - AccountNotEnoughBalance: insufficient account balance. Checks whether the balance of a user account on the China site is greater than or equal to CNY 100.
   * 
   * - ElasticStrength: inventory health. Checks the inventory health of the instance type configured for the scaling group.
   * 
   * - VSwitch: vSwitch status. Checks whether the vSwitch is active, such as whether it is deleted.
   * 
   * - SecurityGroup: security group status. Checks whether the security group is active, such as whether it is deleted.
   * 
   * - KeyPair: key pair status. Checks whether the key pair is active, such as whether it is deleted.
   * 
   * - SlbBackendServerQuota: number of instances mounted to the SLB instance in the scaling group. Checks whether the number of ECS instances mounted to the default server group and virtual service groups of the SLB instance exceeds the quota.
   * 
   * - AlbBackendServerQuota: number of instances mounted to the ALB instance in the scaling group. Checks whether the number of ECS instances mounted to the server groups of the ALB instance exceeds the quota.
   * 
   * - NlbBackendServerQuota: number of instances mounted to the NLB instance in the scaling group. Checks whether the number of ECS instances mounted to the server groups of the NLB instance exceeds the quota.
   * 
   * @example
   * AccountArrearage
   */
  diagnoseType?: string;
  /**
   * @remarks
   * The error code of the diagnostic item. Valid values:
   * 
   * - VSwitchIdNotFound: the vSwitch does not exist.
   * 
   * - SecurityGroupNotFound: the security group does not exist.
   * 
   * - KeyPairNotFound: the key pair does not exist.
   * 
   * - SlbBackendServerQuotaExceeded: the number of ECS instances mounted to the default server group and virtual service groups of the SLB instance exceeds the quota.
   * 
   * - AlbBackendServerQuotaExceeded: the number of ECS instances mounted to the server groups of the ALB instance exceeds the quota.
   * 
   * - NlbBackendServerQuotaExceeded: the number of ECS instances mounted to the server groups of the NLB instance exceeds the quota.
   * 
   * - AccountArrearage: the account has overdue payments.
   * 
   * - AccountNotEnoughBalance: the account balance is insufficient (less than CNY 100).
   * 
   * - ElasticStrengthAlert: the inventory health is poor.
   * 
   * @example
   * VSwitchIdNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * sg-280ih****
   */
  resourceId?: string;
  /**
   * @remarks
   * The diagnostic status of the diagnostic item. Valid values:
   * 
   * - Normal: the diagnostic result is normal.
   * 
   * - Warn: the diagnostic result is a warning.
   * 
   * - Critical: the diagnostic result is critical.
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseType: 'DiagnoseType',
      errorCode: 'ErrorCode',
      resourceId: 'ResourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseType: 'string',
      errorCode: 'string',
      resourceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportsResponseBodyReports extends $dara.Model {
  /**
   * @remarks
   * The time when the diagnostic report was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2024-08-23T02:22:30Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The details of the diagnostic report.
   */
  details?: DescribeDiagnoseReportsResponseBodyReportsDetails[];
  /**
   * @remarks
   * The diagnostic status. The value is the most severe status among the diagnostic details. Valid values:
   * 
   * - Normal: the diagnostic result is normal.
   * 
   * - Warn: the diagnostic result is a warning.
   * 
   * - Critical: the diagnostic result is critical.
   * 
   * @example
   * Normal
   */
  diagnoseStatus?: string;
  /**
   * @remarks
   * The status of the diagnostic report. Valid values:
   * 
   * - Processing: in progress.
   * 
   * - Finished: completed.
   * 
   * @example
   * Finished
   */
  processStatus?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * dr-bp14p0cjp7wvjob5l6hk
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp124uve5iph3*****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The user ID of the scaling group.
   * 
   * @example
   * 161456884*******
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      details: 'Details',
      diagnoseStatus: 'DiagnoseStatus',
      processStatus: 'ProcessStatus',
      regionId: 'RegionId',
      reportId: 'ReportId',
      scalingGroupId: 'ScalingGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      details: { 'type': 'array', 'itemType': DescribeDiagnoseReportsResponseBodyReportsDetails },
      diagnoseStatus: 'string',
      processStatus: 'string',
      regionId: 'string',
      reportId: 'string',
      scalingGroupId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of diagnostic reports.
   */
  reports?: DescribeDiagnoseReportsResponseBodyReports[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ECA123C6-107B-5F70-A177-740A7224C996
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of diagnostic reports.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reports: 'Reports',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      reports: { 'type': 'array', 'itemType': DescribeDiagnoseReportsResponseBodyReports },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reports)) {
      $dara.Model.validateArray(this.reports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

