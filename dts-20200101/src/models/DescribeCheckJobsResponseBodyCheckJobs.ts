// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckJobsResponseBodyCheckJobs extends $dara.Model {
  /**
   * @remarks
   * Billing type, return values: - **POSTPAY**: Pay-as-you-go (postpaid). - **PREPAY**: Subscription (prepaid).
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * checkpoint
   * 
   * @example
   * 1111****
   */
  checkPoint?: number;
  /**
   * @remarks
   * Data validation method, with values:
   * - **1**: Full validation. - **2**: Incremental validation.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * Number of rows with data inconsistency
   * 
   * @example
   * 0
   */
  diffCount?: number;
  /**
   * @remarks
   * Synchronization initialization progress, in percentage.
   * 
   * @example
   * 1
   */
  diffSum?: number;
  /**
   * @remarks
   * Migration, synchronization, or subscription instance ID.
   * 
   * @example
   * dtsz8tc99sy2158b36
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * Migration, synchronization, or subscription task ID.
   * 
   * @example
   * n08o6si4q338b1x
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The number of data rows in the table that have completed validation.
   * 
   * @example
   * 15094
   */
  finishCount?: number;
  /**
   * @remarks
   * DTS task ID. In most cases, there is no need to set this parameter.
   * 
   * @example
   * c3d12dii27t632g
   */
  groupId?: string;
  /**
   * @remarks
   * Instance specification.
   * 
   * @example
   * SMALL
   */
  instanceClass?: string;
  /**
   * @remarks
   * Check the name of the task.
   * 
   * @example
   * dtstest
   */
  jobName?: string;
  /**
   * @remarks
   * Task ID.
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
   * Region ID to which it belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Check result, return values: -**0**: Check passed -**1**: Check failed
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Verify the total number of rows in the data.
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

