// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsMigrationWorkloadsResponseBodyMigrationWorkloads extends $dara.Model {
  /**
   * @remarks
   * The number of AnalyticDB compute units (ACUs).
   * 
   * @example
   * -
   */
  acuCount?: number;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2021-06-21T02:15:16Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * -
   */
  failedMsg?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The maximum response time.
   * 
   * @example
   * 1000
   */
  maxRT?: string;
  /**
   * @remarks
   * The time when the migration job was modified.
   * 
   * @example
   * 2021-06-21T02:15:16Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the workload.
   * 
   * @example
   * TEST-001
   */
  name?: string;
  /**
   * @remarks
   * The OSS URL.
   * 
   * @example
   * oss://******
   */
  ossLocation?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * COMPLETED
   */
  state?: string;
  /**
   * @remarks
   * The destination type.
   * 
   * @example
   * OSS
   */
  targetType?: string;
  /**
   * @remarks
   * The sub-type of the workload.
   * 
   * @example
   * test
   */
  workloadSubType?: string;
  static names(): { [key: string]: string } {
    return {
      acuCount: 'AcuCount',
      createTime: 'CreateTime',
      failedMsg: 'FailedMsg',
      id: 'Id',
      maxRT: 'MaxRT',
      modifyTime: 'ModifyTime',
      name: 'Name',
      ossLocation: 'OssLocation',
      state: 'State',
      targetType: 'TargetType',
      workloadSubType: 'WorkloadSubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuCount: 'number',
      createTime: 'string',
      failedMsg: 'string',
      id: 'string',
      maxRT: 'string',
      modifyTime: 'string',
      name: 'string',
      ossLocation: 'string',
      state: 'string',
      targetType: 'string',
      workloadSubType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

