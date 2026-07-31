// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateSqlBySemanticSqlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the task fails to be created.
   * 
   * @example
   * Failed to rewrite semantic SQL: Ambiguous path from \\"lineitem\\" to \\"nation\\". Multiple paths found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The generated executable SQL statement.
   * 
   * @example
   * select sum(amount) from orders
   */
  generatedSql?: string;
  /**
   * @remarks
   * Indicates whether the generation request was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      generatedSql: 'GeneratedSql',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      generatedSql: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSqlBySemanticSqlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GenerateSqlBySemanticSqlResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateSqlBySemanticSqlResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

