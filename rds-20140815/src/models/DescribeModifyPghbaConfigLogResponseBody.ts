// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems } from "./DescribeModifyPghbaConfigLogResponseBodyHbaLogItems";


export class DescribeModifyPGHbaConfigLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pgm-bp1lymyn1v3i****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * An array that consists of the modifications to the pg_hba.conf file.
   */
  hbaLogItems?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems;
  /**
   * @remarks
   * The number of modification records.
   * 
   * @example
   * 1
   */
  logItemCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D797E6B-E157-510C-A27F-6F9E6DA40633
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      hbaLogItems: 'HbaLogItems',
      logItemCount: 'LogItemCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      hbaLogItems: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems,
      logItemCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.hbaLogItems && typeof (this.hbaLogItems as any).validate === 'function') {
      (this.hbaLogItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

