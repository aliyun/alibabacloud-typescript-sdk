// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OptimizeSqlByMetaAgentRequest extends $dara.Model {
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
   * qwen-plus
   */
  model?: string;
  /**
   * @example
   * 是否为慢SQL
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

