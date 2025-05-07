// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task can be canceled. The value 1 indicates that the task can be canceled. The value 0 indicates that the task cannot be canceled.
   * 
   * @example
   * 1
   */
  allowCancel?: string;
  /**
   * @remarks
   * Indicates whether the switching time can be changed. The value 1 indicates that the switching time can be changed. The value 0 indicates that the switching time cannot be changed.
   * 
   * @example
   * 1
   */
  allowChange?: string;
  /**
   * @remarks
   * The code of the task level. The value S1 indicates the system O\\&M level. The value S0 indicates the exception fixing level.
   * 
   * @example
   * S1
   */
  changeLevel?: string;
  /**
   * @remarks
   * The level of the task in English.
   * 
   * @example
   * System maintenance
   */
  changeLevelEn?: string;
  /**
   * @remarks
   * The level of the task in Chinese.
   * 
   * @example
   * 系统运维
   */
  changeLevelZh?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The current zone.
   * 
   * @example
   * cn-beijing-h
   */
  currentAVZ?: string;
  /**
   * @remarks
   * The type of the database. Valid values: mysql, pgsql, and mssql.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The minor engine version.
   * 
   * @example
   * 5.7
   */
  dbVersion?: string;
  /**
   * @remarks
   * The deadline of the switching time for the task. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-30T23:59:59Z
   */
  deadline?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 11111
   */
  id?: number;
  /**
   * @remarks
   * The impact of the task.
   * 
   * @example
   * TransientDisconnection
   */
  impact?: string;
  /**
   * @remarks
   * The impact of the task in English.
   * 
   * @example
   * Transient instance disconnection
   */
  impactEn?: string;
  /**
   * @remarks
   * The impact of the task in Chinese.
   * 
   * @example
   * 实例闪断
   */
  impactZh?: string;
  /**
   * @remarks
   * The alias and description of the instance.
   * 
   * @example
   * test
   */
  insComment?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-wz96h8jujh512****
   */
  insName?: string;
  /**
   * @remarks
   * The time after the modification. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The required preparation period between the task start time and the switching time. The time is displayed in the HH:mm:ss format.
   * 
   * @example
   * 04:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region ID of the pending task.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The information about the execution result.
   * 
   * @example
   * userCancel
   */
  resultInfo?: string;
  /**
   * @remarks
   * The time when the task was executed. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-30T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status.
   * 
   * *   **3**: pending
   * *   **4**: being processed
   * *   **5**: completed
   * *   **6**: failed
   * *   **7**: canceled
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The subtasks of the instance.
   */
  subInsNames?: string[];
  /**
   * @remarks
   * The switching time of the task. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The task parameters.
   * 
   * @example
   * {
   *       "Action": "UpgradeDBInstance"
   * }
   */
  taskParams?: string;
  /**
   * @remarks
   * The type of the O\\&M task. Valid values:
   * 
   * *   **rds_apsaradb_ha**: primary/secondary switchover
   * *   **rds_apsaradb_transfer**: instance migration
   * *   **rds_apsaradb_upgrade**: update of the minor engine version
   * *   **rds_apsaradb_maxscale**: minor version update of the database proxy
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  /**
   * @remarks
   * The reason for the task in English.
   * 
   * @example
   * Minor version update
   */
  taskTypeEn?: string;
  /**
   * @remarks
   * The reason for the task in Chinese.
   * 
   * @example
   * 小版本升级
   */
  taskTypeZh?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      allowChange: 'AllowChange',
      changeLevel: 'ChangeLevel',
      changeLevelEn: 'ChangeLevelEn',
      changeLevelZh: 'ChangeLevelZh',
      createdTime: 'CreatedTime',
      currentAVZ: 'CurrentAVZ',
      dbType: 'DbType',
      dbVersion: 'DbVersion',
      deadline: 'Deadline',
      id: 'Id',
      impact: 'Impact',
      impactEn: 'ImpactEn',
      impactZh: 'ImpactZh',
      insComment: 'InsComment',
      insName: 'InsName',
      modifiedTime: 'ModifiedTime',
      prepareInterval: 'PrepareInterval',
      region: 'Region',
      resultInfo: 'ResultInfo',
      startTime: 'StartTime',
      status: 'Status',
      subInsNames: 'SubInsNames',
      switchTime: 'SwitchTime',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
      taskTypeEn: 'TaskTypeEn',
      taskTypeZh: 'TaskTypeZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'string',
      allowChange: 'string',
      changeLevel: 'string',
      changeLevelEn: 'string',
      changeLevelZh: 'string',
      createdTime: 'string',
      currentAVZ: 'string',
      dbType: 'string',
      dbVersion: 'string',
      deadline: 'string',
      id: 'number',
      impact: 'string',
      impactEn: 'string',
      impactZh: 'string',
      insComment: 'string',
      insName: 'string',
      modifiedTime: 'string',
      prepareInterval: 'string',
      region: 'string',
      resultInfo: 'string',
      startTime: 'string',
      status: 'number',
      subInsNames: { 'type': 'array', 'itemType': 'string' },
      switchTime: 'string',
      taskParams: 'string',
      taskType: 'string',
      taskTypeEn: 'string',
      taskTypeZh: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subInsNames)) {
      $dara.Model.validateArray(this.subInsNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

