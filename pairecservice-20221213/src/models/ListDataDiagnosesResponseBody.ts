// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataDiagnosesResponseBodyDataDiagnoses extends $dara.Model {
  /**
   * @example
   * {"AnalysisField": "userid","PartitionFieldFormat": "yyyymmdd"}
   */
  config?: string;
  /**
   * @example
   * 08:00
   */
  cycleTime?: string;
  /**
   * @example
   * 3
   */
  dataDiagnosisId?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 4
   */
  leftTableMetaId?: string;
  /**
   * @example
   * dt
   */
  leftTablePartitionField?: string;
  /**
   * @example
   * data_diagnosis_job1
   */
  name?: string;
  /**
   * @example
   * dt
   */
  partitionField?: string;
  /**
   * @example
   * 5
   */
  rightTableMetaId?: string;
  /**
   * @example
   * dt
   */
  rightTablePartitionField?: string;
  /**
   * @example
   * 3
   */
  tableMetaId?: string;
  /**
   * @example
   * table_meta_1
   */
  tableMetaName?: string;
  /**
   * @example
   * 10
   */
  topNQuantity?: number;
  /**
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
  dataDiagnoses?: ListDataDiagnosesResponseBodyDataDiagnoses[];
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
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

