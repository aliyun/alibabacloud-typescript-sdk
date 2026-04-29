// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecallManagementTableRecordsRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @example
   * ["1001","1002"]
   */
  primaryKeys?: Buffer;
  /**
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

