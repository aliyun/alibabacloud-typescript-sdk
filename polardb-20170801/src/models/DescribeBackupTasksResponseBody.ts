// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackupTasksResponseBodyItems } from "./DescribeBackupTasksResponseBodyItems";


export class DescribeBackupTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the backup task.
   */
  items?: DescribeBackupTasksResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FA8C1EF1-E3D4-44D7-B809-823187******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeBackupTasksResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

