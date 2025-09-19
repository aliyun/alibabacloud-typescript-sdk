// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FixSqlByMetaAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1***
   */
  dbId?: string;
  /**
   * @example
   * unknown column col
   */
  error?: string;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @example
   * 正确字段是啥？
   */
  query?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * select * from table where col = 1
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      error: 'Error',
      model: 'Model',
      query: 'Query',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      error: 'string',
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

