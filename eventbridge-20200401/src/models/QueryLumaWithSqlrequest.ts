// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLumaWithSQLRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my_agent
   */
  agentName?: string;
  /**
   * @remarks
   * Rows exceeding this limit are truncated. The IsTruncated field in the response indicates whether truncation occurred.
   * 
   * @example
   * 100
   */
  maxRows?: number;
  /**
   * @remarks
   * Only query statements are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM my_table LIMIT 10
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      maxRows: 'MaxRows',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      maxRows: 'number',
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

