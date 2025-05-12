// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserConnectionRecordsResponseBodyConnectionRecords extends $dara.Model {
  /**
   * @remarks
   * The connection duration. Unit: milliseconds.
   * 
   * @example
   * 3405035000
   */
  connectDuration?: string;
  /**
   * @remarks
   * The time when the end user disconnected from the cloud computer.
   * 
   * @example
   * 2022-02-27T20:03:13Z
   */
  connectEndTime?: string;
  /**
   * @remarks
   * The time when the end user connected to the cloud computer.
   * 
   * @example
   * 2022-01-19T10:12:38Z
   */
  connectStartTime?: string;
  /**
   * @remarks
   * The ID of the connection record.
   * 
   * @example
   * 528
   */
  connectionRecordId?: string;
  /**
   * @remarks
   * The ID of the cloud computer to which the end user connected.
   * 
   * @example
   * ud-2hawufy3uedi1****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud computer to which the end user connected.
   * 
   * @example
   * testName
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

