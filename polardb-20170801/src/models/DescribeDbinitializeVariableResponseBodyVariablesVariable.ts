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

