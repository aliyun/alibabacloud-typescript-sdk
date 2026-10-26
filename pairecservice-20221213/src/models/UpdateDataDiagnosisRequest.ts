// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration details of the data diagnostic task. If `Type` is set to `ChangeRate`, include the analysis field (`AnalysisField`) and partition field format (`PartitionFieldFormat`). If `Type` is set to `PreferenceStatisticsCycle`, include the user ID field (`UserIdField`), single-day retention rate statistical period (`RemainDays`), appearance rate statistical period (`EverAppearedDays`), periodic retention rate statistical period (`RemainRatePeriods`), and partition field format (`PartitionFieldFormat`). If `Type` is set to `JoinTables`, include the left table analysis field (`LeftTableAnalysisField`), right table analysis field (`RightTableAnalysisField`), left table JOIN field (`LeftJoinField`), right table JOIN field (`RightJoinField`), sample quantity for display (`SampleQuantity`), left table partition field format (`LeftTablePartitionFieldFormat`), and right table partition field format (`RightTablePartitionFieldFormat`). If `Type` is set to `BaseStatistics`, include the Tag field (`TagField`), Tag field separator (`TagFieldSeparator`), KV field (`KVField`), KV field separator (`KVFieldSeparator`), KV pair separator (`KVPairSeparator`), Text field (`TextField`), data percentile distribution (`Quantiles`), default value for the string type (`DefaultValueOfString`), null value field for the string type (`NullStringField`), and partition field format (`PartitionFieldFormat`). If `Type` is set to `AbnormalBehavior`, include the user ID field (`UserId`), item ID field (`ItemId`), behavior field (`EventField`), upstream behavior value (`UpStreamBehavior`), downstream behavior value (`DownstreamBehavior`), number of buckets (`NumericHistogramBins`), and partition field format (`PartitionFieldFormat`).
   * 
   * This parameter is required.
   * 
   * @example
   * {"AnalysisField":"userid","PartitionFieldFormat":"yyyymmdd"}
   */
  config?: string;
  /**
   * @remarks
   * The periodic execution time. If this field is left empty, the task does not run periodically. Format: HH:mm.
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
   * The ID of the left table.
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
   * The name of the data diagnostic task configuration.
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
   * The ID of the right table.
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
   * The Top N quantity.
   * 
   * @example
   * 10
   */
  topNQuantity?: number;
  /**
   * @remarks
   * The type of the data diagnostic task. Valid values:
   * - ChangeRate: item or user change rate analysis
   * - PreferenceStatisticsCycle: user preference statistical period analysis
   * - JoinTables: two-table association analysis
   * - BaseStatistics: basic statistical analysis
   * - AbnormalBehavior: abnormal behavior analysis
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

