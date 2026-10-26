// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration content of the data modeling diagnostic task.
   * 
   * - If Type is set to ChangeRate, the configuration must include: analysis field (AnalysisField) and partition field format (PartitionFieldFormat).
   * 
   * - If Type is set to PreferenceStatisticsCycle, the configuration must include: user ID field (UserIdField), single-day retention rate statistical period (RemainDays), ever-appeared rate statistical period (EverAppearedDays), periodic retention rate statistical period (RemainRatePeriods), and partition field format (PartitionFieldFormat).
   * 
   * - If Type is set to JoinTables, the configuration must include: left table analysis field (LeftTableAnalysisField), right table analysis field (RightTableAnalysisField), left table JOIN field (LeftJoinField), right table JOIN field (RightJoinField), display sample quantity (SampleQuantity), left table partition field format (LeftTablePartitionFieldFormat), and right table partition field format (RightTablePartitionFieldFormat).
   * 
   * - If Type is set to BaseStatistics, the configuration must include: tag field (TagField), tag field separator (TagFieldSeparator), KV field (KVField), KV field separator (KVFieldSeparator), KV pair separator (KVPairSeparator), text field (TextField), data percentile distribution (Quantiles), default value for string type (DefaultValueOfString), null string field for string type (NullStringField), and partition field format (PartitionFieldFormat).
   * 
   * - If Type is set to AbnormalBehavior, the configuration must include: user ID field (UserId), item ID field (ItemId), behavior field (EventField), upstream behavior value (UpStreamBehavior), downstream behavior value (DownstreamBehavior), number of histogram bins (NumericHistogramBins), and partition field format (PartitionFieldFormat).
   * 
   * This parameter is required.
   * 
   * @example
   * { "AnalysisField": "userid", "PartitionFieldFormat": "yyyymmdd" }
   */
  config?: string;
  /**
   * @remarks
   * The periodic run time. If this field is empty, the task does not run periodically. The format is HH:mm.
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
   * The name of the data modeling diagnostic task configuration.
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
   * The number of top N results.
   * 
   * @example
   * 10
   */
  topNQuantity?: number;
  /**
   * @remarks
   * The type of the data diagnostic task. Valid values:
   * 
   * - ChangeRate: item/user change rate analysis.
   *   
   * - PreferenceStatisticsCycle: user preference statistical period analysis.
   *   
   * - JoinTables: join table analysis.
   *   
   * - BaseStatistics: basic statistics analysis.
   *   
   * - AbnormalBehavior: abnormal behavior analysis.
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

