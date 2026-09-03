// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserConnectionRecordsResponseBodyConnectionRecords extends $dara.Model {
  /**
   * @remarks
   * The connection duration. Unit: milliseconds.
   * 
   * @example
   * 1800000
   */
  connectDuration?: string;
  /**
   * @remarks
   * The connection end time.
   * 
   * @example
   * 2022-02-27T20:03:13Z
   */
  connectEndTime?: string;
  /**
   * @remarks
   * The connection start time.
   * 
   * @example
   * 2022-01-19T10:12:38Z
   */
  connectStartTime?: string;
  /**
   * @remarks
   * The connection record ID.
   * 
   * @example
   * 528
   */
  connectionRecordId?: string;
  /**
   * @remarks
   * The ID of the connected cloud computer.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the connected cloud computer.
   * 
   * @example
   * demoComputer
   */
  desktopName?: string;
  static names(): { [key: string]: string } {
    return {
      connectDuration: 'ConnectDuration',
      connectEndTime: 'ConnectEndTime',
      connectStartTime: 'ConnectStartTime',
      connectionRecordId: 'ConnectionRecordId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectDuration: 'string',
      connectEndTime: 'string',
      connectStartTime: 'string',
      connectionRecordId: 'string',
      desktopId: 'string',
      desktopName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of user connection records.
   */
  connectionRecords?: DescribeUserConnectionRecordsResponseBodyConnectionRecords[];
  /**
   * @remarks
   * The pagination token for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
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

