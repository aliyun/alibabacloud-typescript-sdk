// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration for the data diagnosis task, specified as a JSON string. The required fields in this object depend on the value of the `Type` parameter.
   * 
   * - If `Type` is set to `ChangeRate`, specify the following fields: `AnalysisField` and `PartitionFieldFormat`.
   * 
   * - If `Type` is set to `PreferenceStatisticsCycle`, specify the following fields: `UserIdField`, `RemainDays`, `EverAppearedDays`, `RemainRatePeriods`, and `PartitionFieldFormat`.
   * 
   * - If `Type` is set to `JoinTables`, specify the following fields: `LeftTableAnalysisField`, `RightTableAnalysisField`, `LeftJoinField`, `RightJoinField`, `SampleQuantity`, `LeftTablePartitionFieldFormat`, and `RightTablePartitionFieldFormat`.
   * 
   * - If `Type` is set to `BaseStatistics`, specify the following fields: `TagField`, `TagFieldSeparator`, `KVField`, `KVFieldSeparator`, `KVPairSeparator`, `TextField`, `Quantiles`, `DefaultValueOfString`, `NullStringField`, and `PartitionFieldFormat`.
   * 
   * - If `Type` is set to `AbnormalBehavior`, specify the following fields: `UserId`, `ItemId`, `EventField`, `UpStreamBehavior`, `DownstreamBehavior`, `NumericHistogramBins`, and `PartitionFieldFormat`.
   * 
   * This parameter is required.
   * 
   * @example
   * { "AnalysisField": "userid", "PartitionFieldFormat": "yyyymmdd" }
   */
  config?: string;
  /**
   * @remarks
   * The scheduled time to run the task. If this parameter is omitted, the task runs only once.
   * 
   * @example
   * 08:00
   */
  cycleTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * learn-pairec-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the left data table.
   * 
   * @example
   * 4
   */
  leftTableMetaId?: string;
  /**
   * @remarks
   * The partition field for the left data table.
   * 
   * @example
   * dt
   */
  leftTablePartitionField?: string;
  /**
   * @remarks
   * The name of the data diagnosis task.
   * 
   * This parameter is required.
   * 
   * @example
   * data_diagnosis_job1
   */
  name?: string;
  /**
   * @remarks
   * The partition field.
   * 
   * @example
   * dt
   */
  partitionField?: string;
  /**
   * @remarks
   * The ID of the right data table.
   * 
   * @example
   * 5
   */
  rightTableMetaId?: string;
  /**
   * @remarks
   * The partition field for the right data table.
   * 
   * @example
   * dt
   */
  rightTablePartitionField?: string;
  /**
   * @remarks
   * The ID of the data table.
   * 
   * @example
   * 3
   */
  tableMetaId?: string;
  /**
   * @remarks
   * The number of top results to return.
   * 
   * @example
   * 10
   */
  topNQuantity?: number;
  /**
   * @remarks
   * The type of the data diagnosis task. Valid values:
   * 
   * - ChangeRate: Item or user change rate analysis.
   * 
   * - PreferenceStatisticsCycle: User preference statistics cycle analysis.
   * 
   * - JoinTables: Two-table join analysis.
   * 
   * - BaseStatistics: Basic statistical analysis.
   * 
   * - AbnormalBehavior: Abnormal behavior analysis.
   * 
   * This parameter is required.
   * 
   * @example
   * ChangeRate
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      cycleTime: 'CycleTime',
      instanceId: 'InstanceId',
      leftTableMetaId: 'LeftTableMetaId',
      leftTablePartitionField: 'LeftTablePartitionField',
      name: 'Name',
      partitionField: 'PartitionField',
      rightTableMetaId: 'RightTableMetaId',
      rightTablePartitionField: 'RightTablePartitionField',
      tableMetaId: 'TableMetaId',
      topNQuantity: 'TopNQuantity',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      cycleTime: 'string',
      instanceId: 'string',
      leftTableMetaId: 'string',
      leftTablePartitionField: 'string',
      name: 'string',
      partitionField: 'string',
      rightTableMetaId: 'string',
      rightTablePartitionField: 'string',
      tableMetaId: 'string',
      topNQuantity: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

