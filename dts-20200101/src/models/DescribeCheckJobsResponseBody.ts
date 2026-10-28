// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckJobsResponseBodyCheckJobs extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **POSTPAY**: pay-as-you-go.
   * - **PREPAY**: subscription.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The checkpoint.
   * 
   * @example
   * 1111****
   */
  checkPoint?: number;
  /**
   * @remarks
   * The data validation method. Valid values:
   * 
   * - **1**: Full data validation.
   * - **2**: Incremental data validation.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The number of rows with data inconsistency.
   * 
   * @example
   * 0
   */
  diffCount?: number;
  /**
   * @remarks
   * The progress of initial synchronization, in percentage.
   * 
   * @example
   * 1
   */
  diffSum?: number;
  /**
   * @remarks
   * The ID of the data migration, synchronization, or change tracking instance.
   * 
   * @example
   * dtsz8tc99sy2158b36
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The ID of the data migration, synchronization, or change tracking task.
   * 
   * @example
   * n08o6si4q338b1x
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The number of verified data rows in the table.
   * 
   * @example
   * 15094
   */
  finishCount?: number;
  /**
   * @remarks
   * The ID of the DTS task.
   * > In most cases, you do not need to specify this parameter.
   * 
   * @example
   * c3d12dii27t632g
   */
  groupId?: string;
  /**
   * @remarks
   * The instance specifications.
   * 
   * @example
   * SMALL
   */
  instanceClass?: string;
  /**
   * @remarks
   * The name of the verification task.
   * 
   * @example
   * dtstest
   */
  jobName?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * as0e1ks426bq3z0
   */
  jobStepId?: string;
  /**
   * @remarks
   * This parameter will be deprecated.
   * 
   * @example
   * ****
   */
  parentJobType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * - **0**: Passed.
   * - **1**: Failed.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The total number of verified data rows.
   * 
   * @example
   * 159
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      checkPoint: 'CheckPoint',
      checkType: 'CheckType',
      diffCount: 'DiffCount',
      diffSum: 'DiffSum',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobId: 'DtsJobId',
      finishCount: 'FinishCount',
      groupId: 'GroupId',
      instanceClass: 'InstanceClass',
      jobName: 'JobName',
      jobStepId: 'JobStepId',
      parentJobType: 'ParentJobType',
      regionId: 'RegionId',
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      checkPoint: 'number',
      checkType: 'number',
      diffCount: 'number',
      diffSum: 'number',
      dtsInstanceID: 'string',
      dtsJobId: 'string',
      finishCount: 'number',
      groupId: 'string',
      instanceClass: 'string',
      jobName: 'string',
      jobStepId: 'string',
      parentJobType: 'string',
      regionId: 'string',
      status: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the verification tasks.
   */
  checkJobs?: DescribeCheckJobsResponseBodyCheckJobs[];
  /**
   * @remarks
   * The dynamic error code. This parameter will be deprecated.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace **%s** in the error message of the **ErrMessage** parameter. > If **ErrMessage** returns **The value of input parameter %s is not valid** and **DynamicMessage** returns **[1,2,3]**, it indicates that the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * present environment is not support,so skip.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries that can be displayed on the current page.
   * 
   * @example
   * 20
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FC1D920B-AB89-52A9-AA5F-AA724C4205E8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkJobs: 'CheckJobs',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkJobs: { 'type': 'array', 'itemType': DescribeCheckJobsResponseBodyCheckJobs },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      success: 'boolean',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.checkJobs)) {
      $dara.Model.validateArray(this.checkJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

