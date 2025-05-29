// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeActiveSQLRecordsResponseBodyQueries } from "./DescribeActiveSqlrecordsResponseBodyQueries";


export class DescribeActiveSQLRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The queried SQL records.
   */
  queries?: DescribeActiveSQLRecordsResponseBodyQueries[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      queries: 'Queries',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      queries: { 'type': 'array', 'itemType': DescribeActiveSQLRecordsResponseBodyQueries },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

