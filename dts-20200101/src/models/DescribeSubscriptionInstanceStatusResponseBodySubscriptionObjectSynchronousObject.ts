// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObjectTableList } from "./DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObjectTableList";


export class DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObject extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the object belongs.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The table name.
   */
  tableList?: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObjectTableList;
  /**
   * @remarks
   * Indicates whether the data of an entire database is tracked. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  wholeDatabase?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      tableList: 'TableList',
      wholeDatabase: 'WholeDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      tableList: DescribeSubscriptionInstanceStatusResponseBodySubscriptionObjectSynchronousObjectTableList,
      wholeDatabase: 'string',
    };
  }

  validate() {
    if(this.tableList && typeof (this.tableList as any).validate === 'function') {
      (this.tableList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

