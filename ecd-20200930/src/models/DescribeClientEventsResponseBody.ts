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
   * The ID of the Alibaba Cloud account with which the event is associated.
   * 
   * @example
   * 112259558861****
   */
  aliUid?: string;
  /**
   * @remarks
   * The number of bytes that are received.
   * 
   * @example
   * 8665
   */
  bytesReceived?: string;
  /**
   * @remarks
   * The number of bytes that are sent.
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
   * The OS that the client runs.
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
   * The desktop group ID.
   * 
   * @example
   * dg-kadkdfaf****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The desktop group name.
   * 
   * @example
   * testName
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The cloud desktop ID.
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
   * 10.10.*.*
   */
  desktopIp?: string;
  /**
   * @remarks
   * The cloud desktop name.
   * 
   * @example
   * test
   */
  desktopName?: string;
  /**
   * @remarks
   * The ID of the directory to which the cloud desktop belongs.
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
   * The information about the end user that connects to the cloud desktop from the EDS client. The information can be a RAM user ID or an AD username.
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
   * The event type. Valid values:
   * 
   * @example
   * DESKTOP_DISCONNECT
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the workspace to which the cloud desktop belongs.
   * 
   * @example
   * cn-hangzhou+dir-bh77qa8nmjot4****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The account type of the workspace.
   * 
   * Valid values:
   * 
   * *   SIMPLE: convenience account
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   AD_CONNECTOR: enterprise AD account
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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
   * The status of the event. If you set the EventType parameter to `DESKTOP_DISCONNECT` or `GET_CONNECTION_TICKET`, this parameter is returned. Valid values:
   * 
   * *   200\\. The value indicates that the request is successful.
   * *   An error message. The value indicates that the request failed. Example: FailedToGetConnectionTicket.
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
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
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

