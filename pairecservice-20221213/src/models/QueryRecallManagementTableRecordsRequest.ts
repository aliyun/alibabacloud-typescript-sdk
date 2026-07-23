// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecallManagementTableRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @remarks
   * The primary keys of the records to retrieve.
   * 
   * @example
   * ["1001","1002"]
   */
  primaryKeys?: Buffer;
  /**
   * @remarks
   * The recall management table version ID. If you omit this parameter, the API uses the currently published version.
   * 
   * @example
   * 1
   */
  recallManagementTableVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      primaryKeys: 'PrimaryKeys',
      recallManagementTableVersionId: 'RecallManagementTableVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      primaryKeys: 'Buffer',
      recallManagementTableVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

