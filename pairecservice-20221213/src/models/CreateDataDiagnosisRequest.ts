// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * { "AnalysisField": "userid", "PartitionFieldFormat": "yyyymmdd" }
   */
  config?: string;
  /**
   * @example
   * 08:00
   */
  cycleTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * learn-pairec-xxx
   */
  instanceId?: string;
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
   * @remarks
   * This parameter is required.
   * 
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
   * 10
   */
  topNQuantity?: number;
  /**
   * @remarks
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

