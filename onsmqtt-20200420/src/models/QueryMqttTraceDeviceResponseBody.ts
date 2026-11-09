// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMqttTraceDeviceResponseBodyDeviceInfoList extends $dara.Model {
  /**
   * @remarks
   * The device action. Valid values:
   * 
   * - **connect**: The client requests a connection to the server.
   * 
   * - **close**: The TCP connection is closed.
   * 
   * - **disconnect**: The client requests to disconnect from the server.
   * 
   * @example
   * connect
   */
  action?: string;
  /**
   * @remarks
   * The return code of the device action. Valid values:
   * 
   * - **mqtt.trace.action.connect**: returned when the device action is **connect**.
   * 
   * - **mqtt.trace.action.close**: returned when the device action is **close**.
   * 
   * - **mqtt.trace.action.disconnect**: returned when the device action is **disconnect**.
   * 
   * @example
   * mqtt.trace.action.connect
   */
  actionCode?: string;
  /**
   * @remarks
   * The description of the device action. Valid values:
   * 
   * - **accepted**: The server accepts the connection request from the client.
   * 
   * - **not authorized**: The TCP connection is closed because the permission verification of the instance accessed by the client fails.
   * 
   * - **clientId conflict**: The TCP connection is closed because of a client ID conflict.
   * 
   * - **resource auth failed**: The TCP connection is closed because the permission verification of the topic or group ID resource accessed by the client fails.
   * 
   * - **no heart**: The TCP connection is closed because no heartbeat is detected from the client.
   * 
   * - **closed by client**: The TCP connection is closed because of a client exception.
   * 
   * - **disconnected by client**: The client requests to disconnect.
   * 
   * - **invalid param**: The TCP connection is closed because of invalid request parameters.
   * 
   * - **Socket IOException**: The TCP connection is closed because of network jitter or packet loss.
   * 
   * @example
   * accept
   */
  actionInfo?: string;
  /**
   * @remarks
   * The connection identifier of the device.
   * 
   * @example
   * c69fe839209547fa9d073781b9cd****
   */
  channelId?: string;
  /**
   * @remarks
   * The time when the device action occurred.
   * 
   * @example
   * 2021-05-21 15:51:54.867
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      channelId: 'ChannelId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      channelId: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The details of the device activity entries.
   */
  deviceInfoList?: QueryMqttTraceDeviceResponseBodyDeviceInfoList[];
  /**
   * @remarks
   * The maximum number of device activity entries displayed per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * A common parameter. Each request has a unique ID that is active for troubleshooting and locating issues.
   * 
   * @example
   * 317076B7-F946-46BC-A98F-4CF9777C****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of device activity entries returned.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deviceInfoList: 'DeviceInfoList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deviceInfoList: { 'type': 'array', 'itemType': QueryMqttTraceDeviceResponseBodyDeviceInfoList },
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deviceInfoList)) {
      $dara.Model.validateArray(this.deviceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

