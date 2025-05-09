// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStructSyncOrderRequestParamTableInfoList extends $dara.Model {
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * test_tbl
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The name of the destination table.
   * 
   * @example
   * test_tbl
   */
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceTableName: 'string',
      targetTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

