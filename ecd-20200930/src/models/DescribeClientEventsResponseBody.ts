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
   * The ID of the Alibaba Cloud account associated with the event.
   * 
   * @example
   * 112259558861****
   */
  aliUid?: string;
  /**
   * @remarks
   * The number of bytes received.
   * 
   * @example
   * 8665
   */
  bytesReceived?: string;
  /**
   * @remarks
   * The number of bytes sent.
   * 
   * @example
   * 2345
   */
  bytesSend?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 100.68.*.*
   */
  clientIp?: string;
  /**
   * @remarks
   * The operating system of the client.
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
   * The description of the event.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the desktop group.
   * 
   * @example
   * dg-kadkdfaf****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the desktop group.
   * 
   * @example
   * testName
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ecd-8fupvkhg0aayu****
   */
  desktopId?: string;
  /**
   * @remarks
   * The IP address of the cloud desktop.
   * 
   * @example
   * 10.10.XX.XX
   */
  desktopIp?: string;
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * test
   */
  desktopName?: string;
  /**
   * @remarks
   * The ID of the cloud desktop\\"s directory.
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
   * The ID of the end user. The value can be the ID of a RAM user or the username of an AD user.
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
   * The time the event occurred.
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
   * The ID of the cloud desktop\\"s office site.
   * 
   * @example
   * cn-hangzhou+dir-bh77qa8nmjot4****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the office site.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The type of account system for the office site.
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
   * The status of the event. This parameter is returned for `DESKTOP_DISCONNECT` and `GET_CONNECTION_TICKET` events. Valid values:
   * 
   * - `200`: Success.
   * 
   * - An error message, such as `FailedToGetConnectionTicket`.
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
   * The list of user events.
   */
  events?: DescribeClientEventsResponseBodyEvents[];
  /**
   * @remarks
   * The pagination token. If this parameter is empty, all results have been returned.
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
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeClientEventsResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
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

