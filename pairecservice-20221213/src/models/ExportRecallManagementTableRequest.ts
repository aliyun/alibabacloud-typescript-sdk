// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportRecallManagementTableRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The MaxCompute project name.
   * 
   * @example
   * test
   */
  maxcomputeProjectName?: string;
  /**
   * @remarks
   * The MaxCompute project schema.
   * 
   * @example
   * default
   */
  maxcomputeSchema?: string;
  /**
   * @remarks
   * The name of the destination table in MaxCompute.
   * 
   * @example
   * table-1
   */
  maxcomputeTableName?: string;
  /**
   * @remarks
   * The table partitions to export. The value must be a JSON object where each key is a partition field and its value is the corresponding partition value.
   */
  partitions?: { [key: string]: string };
  /**
   * @remarks
   * The version ID of the recall management table. This parameter defaults to the current published version.
   * 
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

