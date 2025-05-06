// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBLinksResponseBodyDBLinkInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the source cluster that the database link connects.
   * 
   * @example
   * pc-a*************
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the database link.
   * 
   * @example
   * dblink_test
   */
  DBLinkName?: string;
  /**
   * @remarks
   * The name of the source database of the database link.
   * 
   * @example
   * testdb1
   */
  sourceDBName?: string;
  /**
   * @remarks
   * The account of the destination database of the database link.
   * 
   * @example
   * testacc
   */
  targetAccount?: string;
  /**
   * @remarks
   * The ID of the destination cluster that the database link connects.
   * 
   * > If the destination cluster is not a PolarDB for Oracle cluster, the returned value is empty.
   * 
   * @example
   * pc-b************
   */
  targetDBInstanceName?: string;
  /**
   * @remarks
   * The name of the destination database of the database link.
   * 
   * @example
   * testdb2
   */
  targetDBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBLinkName: 'DBLinkName',
      sourceDBName: 'SourceDBName',
      targetAccount: 'TargetAccount',
      targetDBInstanceName: 'TargetDBInstanceName',
      targetDBName: 'TargetDBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBLinkName: 'string',
      sourceDBName: 'string',
      targetAccount: 'string',
      targetDBInstanceName: 'string',
      targetDBName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

