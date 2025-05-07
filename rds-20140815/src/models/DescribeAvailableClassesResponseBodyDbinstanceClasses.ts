// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange } from "./DescribeAvailableClassesResponseBodyDbinstanceClassesDbinstanceStorageRange";


export class DescribeAvailableClassesResponseBodyDBInstanceClasses extends $dara.Model {
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * rds.mysql.c1.large
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The storage capacity range that is supported for the instance.
   */
  DBInstanceStorageRange?: DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange;
  static names(): { [key: string]: string } {
    return {
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorageRange: 'DBInstanceStorageRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClass: 'string',
      DBInstanceStorageRange: DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange,
    };
  }

  validate() {
    if(this.DBInstanceStorageRange && typeof (this.DBInstanceStorageRange as any).validate === 'function') {
      (this.DBInstanceStorageRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

