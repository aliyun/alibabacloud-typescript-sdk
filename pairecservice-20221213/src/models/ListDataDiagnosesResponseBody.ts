// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataDiagnosesResponseBodyDataDiagnoses extends $dara.Model {
  /**
   * @remarks
   * The configuration for the data diagnosis task, in JSON format. The required fields depend on the `Type` value:<br>
   * 
   * @example
   * {"AnalysisField": "userid","PartitionFieldFormat": "yyyymmdd"}
   */
  config?: string;
  /**
   * @remarks
   * The time at which the task is scheduled to run periodically. If this parameter is empty, the task runs only once.
   * 
   * @example
   * 08:00
   */
  cycleTime?: string;
  /**
   * @remarks
   * The data diagnosis ID.
   * 
   * @example
   * 3
   */
  dataDiagnosisId?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the task was last updated.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
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
   * The name of the data diagnosis.
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
   * The data table ID.
   * 
   * @example
   * 3
   */
  tableMetaId?: string;
  /**
   * @remarks
   * The name of the data table.
   * 
   * @example
   * table_meta_1
   */
  tableMetaName?: string;
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
   * The type of data diagnosis. Valid values:
   * 
   * - `ChangeRate`: Change Rate Analysis.
   * 
   * - `PreferenceStatisticsCycle`: Preference Statistics Cycle Analysis.
   * 
   * - `JoinTables`: Join Tables Analysis.
   * 
   * - `BaseStatistics`: Base Statistics Analysis.
   * 
   * - `AbnormalBehavior`: Abnormal Behavior Analysis.
   * 
   * @example
   * ChangeRate
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      cycleTime: 'CycleTime',
      dataDiagnosisId: 'DataDiagnosisId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      leftTableMetaId: 'LeftTableMetaId',
      leftTablePartitionField: 'LeftTablePartitionField',
      name: 'Name',
      partitionField: 'PartitionField',
      rightTableMetaId: 'RightTableMetaId',
      rightTablePartitionField: 'RightTablePartitionField',
      tableMetaId: 'TableMetaId',
      tableMetaName: 'TableMetaName',
      topNQuantity: 'TopNQuantity',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      cycleTime: 'string',
      dataDiagnosisId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      leftTableMetaId: 'string',
      leftTablePartitionField: 'string',
      name: 'string',
      partitionField: 'string',
      rightTableMetaId: 'string',
      rightTablePartitionField: 'string',
      tableMetaId: 'string',
      tableMetaName: 'string',
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

export class ListDataDiagnosesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data diagnoses.
   */
  dataDiagnoses?: ListDataDiagnosesResponseBodyDataDiagnoses[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiagnoses: 'DataDiagnoses',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiagnoses: { 'type': 'array', 'itemType': ListDataDiagnosesResponseBodyDataDiagnoses },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataDiagnoses)) {
      $dara.Model.validateArray(this.dataDiagnoses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

