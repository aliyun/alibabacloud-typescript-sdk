// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInitializeVariableResponseBodyVariables } from "./DescribeDbinitializeVariableResponseBodyVariables";


export class DescribeDBInitializeVariableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * *   Oracle
   * *   PostgreSQL
   * *   MySQL
   * 
   * @example
   * PostgreSQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 11
   */
  DBVersion?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 475F58B7-F394-4394-AA6E-4F1CBA******
   */
  requestId?: string;
  /**
   * @remarks
   * The attributes that are returned.
   */
  variables?: DescribeDBInitializeVariableResponseBodyVariables;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      requestId: 'RequestId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBType: 'string',
      DBVersion: 'string',
      requestId: 'string',
      variables: DescribeDBInitializeVariableResponseBodyVariables,
    };
  }

  validate() {
    if(this.variables && typeof (this.variables as any).validate === 'function') {
      (this.variables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

