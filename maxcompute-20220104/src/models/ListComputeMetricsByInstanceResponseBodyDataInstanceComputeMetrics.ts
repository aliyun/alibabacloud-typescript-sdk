// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics extends $dara.Model {
  /**
   * @remarks
   * The end time of the job execution.
   * 
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @remarks
   * The job(instance) ID.
   * 
   * @example
   * 20240730****ddlr
   */
  instanceId?: string;
  /**
   * @remarks
   * The owner of the job.
   * 
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * odps_porject
   */
  projectName?: string;
  /**
   * @remarks
   * The signature of the SQL job.
   * 
   * @example
   * pqrs12345tuv
   */
  signature?: string;
  /**
   * @remarks
   * Specifications Type, specifies the resource package that you select when you purchase the MaxCompute service.
   * - OdpsStandard: the pay-as-you-go resource package.
   * 
   * - OdpsSpot: the pay-as-you-go spot resource package.
   * 
   * @example
   * OdpsStandard
   */
  specCode?: string;
  /**
   * @remarks
   * The submission time of the job.
   * 
   * @example
   * 1610432000000
   */
  submitTime?: number;
  /**
   * @remarks
   * Metering types.
   * - ComputationSql: the metering data of SQL jobs that involve internal tables.
   * 
   * - ComputationSqlOTS: the metering data of SQL jobs that involve Tablestore external tables.
   * 
   * - ComputationSqlOSS: the metering data of SQL jobs that involve OSS external tables.
   * 
   * - MapReduce: the metering data of MapReduce jobs.
   * 
   * - spark: the metering data of Spark jobs.
   * 
   * - mars: the metering data of Mars jobs.
   * 
   * @example
   * ComputationSql
   */
  type?: string;
  /**
   * @remarks
   * The unit of computing resource usage
   * 
   * @example
   * GB
   */
  unit?: string;
  /**
   * @remarks
   * The computing resource usage is calculated based on the following items:
   * 
   * - Amount of scanned data in the unit of GB. For the jobs whose metering types are ComputationSql, ComputationSqlOTS, or ComputationSqlOSS, they are billed based on the amount of scanned data. The computing resource usage of such a job is calculated by using the following formula: Amount of scanned data × Complexity. The complexity is fixed at 1 for the jobs whose metering types are ComputationSqlOTS or ComputationSqlOSS.
   * 
   * - CU-hours. For the jobs whose metering types are MapReduce, spark, or mars, they are billed based on CU-hours.
   * 
   * @example
   * 1024
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      projectName: 'projectName',
      signature: 'signature',
      specCode: 'specCode',
      submitTime: 'submitTime',
      type: 'type',
      unit: 'unit',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      projectName: 'string',
      signature: 'string',
      specCode: 'string',
      submitTime: 'number',
      type: 'string',
      unit: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

