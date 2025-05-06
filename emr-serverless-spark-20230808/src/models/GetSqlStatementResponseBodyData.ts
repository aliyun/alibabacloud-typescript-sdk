// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSqlStatementResponseBodyDataSqlOutputs } from "./GetSqlStatementResponseBodyDataSqlOutputs";


export class GetSqlStatementResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of time that is consumed by SQL queries.
   */
  executionTime?: number[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ERROR-102
   */
  sqlErrorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message
   */
  sqlErrorMessage?: string;
  /**
   * @remarks
   * The query results.
   */
  sqlOutputs?: GetSqlStatementResponseBodyDataSqlOutputs[];
  /**
   * @remarks
   * The query status.
   * 
   * Valid values:
   * 
   * *   running
   * *   available
   * *   cancelled
   * *   error
   * *   cancelling
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * st-1231311abadfaa
   */
  statementId?: string;
  static names(): { [key: string]: string } {
    return {
      executionTime: 'executionTime',
      sqlErrorCode: 'sqlErrorCode',
      sqlErrorMessage: 'sqlErrorMessage',
      sqlOutputs: 'sqlOutputs',
      state: 'state',
      statementId: 'statementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionTime: { 'type': 'array', 'itemType': 'number' },
      sqlErrorCode: 'string',
      sqlErrorMessage: 'string',
      sqlOutputs: { 'type': 'array', 'itemType': GetSqlStatementResponseBodyDataSqlOutputs },
      state: 'string',
      statementId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executionTime)) {
      $dara.Model.validateArray(this.executionTime);
    }
    if(Array.isArray(this.sqlOutputs)) {
      $dara.Model.validateArray(this.sqlOutputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

