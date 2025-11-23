// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OptimizeSqlByMetaAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database. You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1***
   */
  dbId?: string;
  /**
   * @remarks
   * The name of the selected model. You can use only Qwen series models.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 是否为慢SQL
   */
  query?: string;
  /**
   * @remarks
   * The SQL statement that you want to analyze.
   * 
   * This parameter is required.
   * 
   * @example
   * select * from table where col = 1
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      model: 'Model',
      query: 'Query',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      model: 'string',
      query: 'string',
      sql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

