// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the data diagnosis task, provided as a JSON string. The required fields vary based on the `Type` parameter. For `ChangeRate`, specify `AnalysisField` and `PartitionFieldFormat`. For `PreferenceStatisticsCycle`, specify `UserIdField`, `RemainDays`, `EverAppearedDays`, `RemainRatePeriods`, and `PartitionFieldFormat`. For `JoinTables`, specify `LeftTableAnalysisField`, `RightTableAnalysisField`, `LeftJoinField`, `RightJoinField`, `SampleQuantity`, `LeftTablePartitionFieldFormat`, and `RightTablePartitionFieldFormat`. For `BaseStatistics`, specify `TagField`, `TagFieldSeparator`, `KVField`, `KVFieldSeparator`, `KVPairSeparator`, `TextField`, `Quantiles`, `DefaultValueOfString`, `NullStringField`, and `PartitionFieldFormat`. For `AbnormalBehavior`, specify `UserId`, `ItemId`, `EventField`, `UpStreamBehavior`, `DownstreamBehavior`, `NumericHistogramBins`, and `PartitionFieldFormat`.
   * 
   * This parameter is required.
   * 
   * @example
   * {"AnalysisField":"userid","PartitionFieldFormat":"yyyymmdd"}
   */
  config?: string;
  /**
   * @remarks
   * The execution time for periodic runs. If this field is omitted, the task does not run periodically.
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
   * The partition field of the left table.
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
   * The partition field of the right table.
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
   * The number of top-ranked results to return.
   * 
   * @example
   * 10
   */
  topNQuantity?: number;
  /**
   * @remarks
   * The type of the data diagnosis task. Valid values:
   * 
   * - `ChangeRate`: item/user change rate analysis.
   * 
   * - `PreferenceStatisticsCycle`: user preference statistics cycle analysis.
   * 
   * - `JoinTables`: two-table join analysis.
   * 
   * - `BaseStatistics`: basic statistical analysis.
   * 
   * - `AbnormalBehavior`: abnormal behavior analysis.
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

