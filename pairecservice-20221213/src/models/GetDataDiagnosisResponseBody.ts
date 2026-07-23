// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataDiagnosisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the data diagnosis task.
   * 
   * @example
   * {"AnalysisField":"userid","PartitionFieldFormat":"yyyymmdd"}
   */
  config?: string;
  /**
   * @remarks
   * The time for periodic execution. If this field is empty, the task does not execute periodically.
   * 
   * @example
   * 08:00
   */
  cycleTime?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time.
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
   * The partition field of the left data table.
   * 
   * @example
   * dt
   */
  leftTablePartitionField?: string;
  /**
   * @remarks
   * The name of the data diagnosis task.
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
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
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
   * The partition field of the right data table.
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
   * The name of the data table.
   * 
   * @example
   * table_meta_1
   */
  tableMetaName?: string;
  /**
   * @remarks
   * The Top-N quantity.
   * 
   * @example
   * 10
   */
  topNQuantity?: number;
  /**
   * @remarks
   * The type of the data diagnosis task.
   * 
   * @example
   * ChangeRate
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      cycleTime: 'CycleTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      leftTableMetaId: 'LeftTableMetaId',
      leftTablePartitionField: 'LeftTablePartitionField',
      name: 'Name',
      partitionField: 'PartitionField',
      requestId: 'RequestId',
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
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      leftTableMetaId: 'string',
      leftTablePartitionField: 'string',
      name: 'string',
      partitionField: 'string',
      requestId: 'string',
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

