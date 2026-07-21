// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientEventsResponseBodyEventsTerminalInfo extends $dara.Model {
  model?: string;
  productName?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      productName: 'ProductName',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      productName: 'string',
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account associated with the event.
   * 
   * @example
   * 112259558861****
   */
  aliUid?: string;
  /**
   * @remarks
   * The number of bytes received. Unit: bytes.
   * 
   * @example
   * 8665
   */
  bytesReceived?: string;
  /**
   * @remarks
   * The number of bytes sent. Unit: bytes.
   * 
   * @example
   * 2345
   */
  bytesSend?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 100.68.*.*
   */
  clientIp?: string;
  /**
   * @remarks
   * The client operating system.
   * 
   * @example
   * Darwin 17.7.0 x64
   */
  clientOS?: string;
  /**
   * @remarks
   * The client version.
   * 
   * @example
   * 1.0.4 202012021700
   */
  clientVersion?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The cloud computer pool ID.
   * 
   * @example
   * dg-kadkdfaf****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The cloud computer pool name.
   * 
   * @example
   * testName
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-8fupvkhg0aayu****
   */
  desktopId?: string;
  /**
   * @remarks
   * The IP address of the cloud computer.
   * 
   * @example
   * 10.10.XX.XX
   */
  desktopIp?: string;
  /**
   * @remarks
   * The name of the cloud computer.
   * 
   * @example
   * test
   */
  desktopName?: string;
  /**
   * @remarks
   * The directory ID to which the cloud computer belongs.
   * 
   * @example
   * cn-hangzhou+dir-bh77qa8nmjot4****
   */
  directoryId?: string;
  /**
   * @remarks
   * The directory type.
   * 
   * @example
   * RAM
   */
  directoryType?: string;
  /**
   * @remarks
   * The logon user information, which is a Resource Access Management (RAM) user ID or AD username.
   * 
   * @example
   * 28961708130834****
   */
  endUserId?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 5651188b-3070-d1cc-5311-75753d59****
   */
  eventId?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 2020-11-30T06:32:31Z
   */
  eventTime?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * DESKTOP_DISCONNECT
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the office network to which the cloud computer belongs.
   * 
   * @example
   * cn-hangzhou+dir-bh77qa8nmjot4****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the office network.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The account system type of the office network.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the event action. This field typically appears in `DESKTOP_DISCONNECT` and `GET_CONNECTION_TICKET` events. Valid values:
   * - 200: success.
   * - A failure message is returned, such as FailedToGetConnectionTicket.
   * 
   * @example
   * 200
   */
  status?: string;
  terminalInfo?: DescribeClientEventsResponseBodyEventsTerminalInfo;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bytesReceived: 'BytesReceived',
      bytesSend: 'BytesSend',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      description: 'Description',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      desktopId: 'DesktopId',
      desktopIp: 'DesktopIp',
      desktopName: 'DesktopName',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      endUserId: 'EndUserId',
      eventId: 'EventId',
      eventTime: 'EventTime',
      eventType: 'EventType',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      regionId: 'RegionId',
      status: 'Status',
      terminalInfo: 'TerminalInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bytesReceived: 'string',
      bytesSend: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      description: 'string',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      desktopId: 'string',
      desktopIp: 'string',
      desktopName: 'string',
      directoryId: 'string',
      directoryType: 'string',
      endUserId: 'string',
      eventId: 'string',
      eventTime: 'string',
      eventType: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      regionId: 'string',
      status: 'string',
      terminalInfo: DescribeClientEventsResponseBodyEventsTerminalInfo,
    };
  }

  validate() {
    if(this.terminalInfo && typeof (this.terminalInfo as any).validate === 'function') {
      (this.terminalInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The user events.
   */
  events?: DescribeClientEventsResponseBodyEvents[];
  /**
   * @remarks
   * The pagination token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 28A40F12-F340-442B-A35F-46EF6A03227B
   */
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeClientEventsResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

