// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResultsScripts extends $dara.Model {
  /**
   * @remarks
   * The content of the SQL script.
   * 
   * @example
   * alter table xxx add index idx_xx(yyy);
   */
  content?: string;
  /**
   * @remarks
   * The purpose of the SQL script. The value is set to AddIndex.
   * 
   * @example
   * AddIndex
   */
  opType?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * xxx
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      opType: 'OpType',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      opType: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

