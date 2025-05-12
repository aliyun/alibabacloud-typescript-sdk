// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserConnectionRecordsResponseBodyConnectionRecords } from "./DescribeUserConnectionRecordsResponseBodyConnectionRecords";


export class DescribeUserConnectionRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The connection records.
   */
  connectionRecords?: DescribeUserConnectionRecordsResponseBodyConnectionRecords[];
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2CC66B0A-BA3B-5D87-BFBE-11AAAD7A8E03
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionRecords: 'ConnectionRecords',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionRecords: { 'type': 'array', 'itemType': DescribeUserConnectionRecordsResponseBodyConnectionRecords },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connectionRecords)) {
      $dara.Model.validateArray(this.connectionRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

