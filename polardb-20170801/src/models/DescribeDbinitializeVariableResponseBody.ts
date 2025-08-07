// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInitializeVariableResponseBodyVariablesVariable extends $dara.Model {
  /**
   * @remarks
   * The character set that is supported.
   * 
   * @example
   * EUC_CN
   */
  charset?: string;
  /**
   * @remarks
   * The language that indicates the collation of the databases that are created.
   * 
   * >- The language must be compatible with the character set that is specified by **CharacterSetName**.
   * >- This parameter is required for PolarDB for PostgreSQL (Compatible with Oracle) clusters or PolarDB for PostgreSQL clusters.
   * >- This parameter is optional for PolarDB for MySQL clusters.
   * 
   * To view the valid values for this parameter, perform the following steps: Log on to the PolarDB console and click the ID of a cluster. In the left-side navigation pane, choose **Settings and Management** > **Databases**. Then, click **Create Database**.
   * 
   * @example
   * C
   */
  collate?: string;
  /**
   * @remarks
   * The language that indicates the character type of the database.
   * 
   * > 
   * 
   * *   The language must be compatible with the character set that is specified by **CharacterSetName**.
   * 
   * *   The specified parameter value must be the same as the value of **Collate**.
   * 
   * *   If the PolarDB cluster runs PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL, this parameter is required. If the cluster runs PolarDB for MySQL, this parameter is not supported.
   * 
   * To view the valid values of this parameter, perform the following steps: First, log on to the PolarDB console and click the ID of a cluster. Then, in the left-side navigation pane, choose **Settings and Management** > **Databases**. Finally, click **Create Database**.
   * 
   * @example
   * C
   */
  ctype?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      collate: 'Collate',
      ctype: 'Ctype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      collate: 'string',
      ctype: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInitializeVariableResponseBodyVariables extends $dara.Model {
  variable?: DescribeDBInitializeVariableResponseBodyVariablesVariable[];
  static names(): { [key: string]: string } {
    return {
      variable: 'Variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variable: { 'type': 'array', 'itemType': DescribeDBInitializeVariableResponseBodyVariablesVariable },
    };
  }

  validate() {
    if(Array.isArray(this.variable)) {
      $dara.Model.validateArray(this.variable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

