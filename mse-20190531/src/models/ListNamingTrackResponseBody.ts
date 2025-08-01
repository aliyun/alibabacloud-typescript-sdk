// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamingTrackResponseBodyTraces extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 120.40.32.235
   */
  clientIp?: string;
  /**
   * @remarks
   * The group.
   * 
   * @example
   * prod
   */
  group?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  instanceSize?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * mse-197*****-167083******-reg-center-0-0
   */
  nodeName?: string;
  /**
   * @remarks
   * The push time.
   * 
   * @example
   * 2022-12-16 11:48:07
   */
  pushTime?: string;
  /**
   * @remarks
   * The total push time.
   * 
   * @example
   * 628ms
   */
  pushTimeAll?: string;
  /**
   * @remarks
   * The push time for the network.
   * 
   * @example
   * 37ms
   */
  pushTimeNetwork?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * fpx-xms-baseinfo
   */
  serverName?: string;
  /**
   * @remarks
   * The duration that is specified in the service-level agreement (SLA).
   * 
   * @example
   * 628ms
   */
  slaTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      group: 'Group',
      instanceSize: 'InstanceSize',
      nodeName: 'NodeName',
      pushTime: 'PushTime',
      pushTimeAll: 'PushTimeAll',
      pushTimeNetwork: 'PushTimeNetwork',
      serverName: 'ServerName',
      slaTime: 'SlaTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      group: 'string',
      instanceSize: 'string',
      nodeName: 'string',
      pushTime: 'string',
      pushTimeAll: 'string',
      pushTimeNetwork: 'string',
      serverName: 'string',
      slaTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamingTrackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9916CBED-B2D5-5685-9129-4592FE1*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  /**
   * @remarks
   * The data information.
   */
  traces?: ListNamingTrackResponseBodyTraces[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      traces: 'Traces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      traces: { 'type': 'array', 'itemType': ListNamingTrackResponseBodyTraces },
    };
  }

  validate() {
    if(Array.isArray(this.traces)) {
      $dara.Model.validateArray(this.traces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

