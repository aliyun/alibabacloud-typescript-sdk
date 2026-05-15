// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportRecallManagementTableRequest extends $dara.Model {
  /**
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @example
   * test
   */
  maxcomputeProjectName?: string;
  /**
   * @remarks
   * maxcompute schema。
   * 
   * @example
   * default
   */
  maxcomputeSchema?: string;
  /**
   * @example
   * table-1
   */
  maxcomputeTableName?: string;
  partitions?: { [key: string]: string };
  /**
   * @example
   * 20250213000000
   */
  recallManagementTableVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxcomputeProjectName: 'MaxcomputeProjectName',
      maxcomputeSchema: 'MaxcomputeSchema',
      maxcomputeTableName: 'MaxcomputeTableName',
      partitions: 'Partitions',
      recallManagementTableVersionId: 'RecallManagementTableVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxcomputeProjectName: 'string',
      maxcomputeSchema: 'string',
      maxcomputeTableName: 'string',
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      recallManagementTableVersionId: 'string',
    };
  }

  validate() {
    if(this.partitions) {
      $dara.Model.validateMap(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

