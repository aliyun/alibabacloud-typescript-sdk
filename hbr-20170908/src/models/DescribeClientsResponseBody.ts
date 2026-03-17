// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientsResponseBodyClientsClient extends $dara.Model {
  alertSetting?: string;
  clientId?: string;
  clientName?: string;
  clientType?: string;
  clientVersion?: string;
  clusterId?: string;
  createdTime?: number;
  heartBeatTime?: number;
  instanceId?: string;
  instanceName?: string;
  maxVersion?: string;
  networkType?: string;
  status?: string;
  statusMessage?: string;
  updatedTime?: number;
  useHttps?: boolean;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clientId: 'ClientId',
      clientName: 'ClientName',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      clusterId: 'ClusterId',
      createdTime: 'CreatedTime',
      heartBeatTime: 'HeartBeatTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxVersion: 'MaxVersion',
      networkType: 'NetworkType',
      status: 'Status',
      statusMessage: 'StatusMessage',
      updatedTime: 'UpdatedTime',
      useHttps: 'UseHttps',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clientId: 'string',
      clientName: 'string',
      clientType: 'string',
      clientVersion: 'string',
      clusterId: 'string',
      createdTime: 'number',
      heartBeatTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      maxVersion: 'string',
      networkType: 'string',
      status: 'string',
      statusMessage: 'string',
      updatedTime: 'number',
      useHttps: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBodyClients extends $dara.Model {
  client?: DescribeClientsResponseBodyClientsClient[];
  static names(): { [key: string]: string } {
    return {
      client: 'Client',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: { 'type': 'array', 'itemType': DescribeClientsResponseBodyClientsClient },
    };
  }

  validate() {
    if(Array.isArray(this.client)) {
      $dara.Model.validateArray(this.client);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBody extends $dara.Model {
  clients?: DescribeClientsResponseBodyClients;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17189276-465D-5EF3-8FFD-0FF51B5A41A0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: DescribeClientsResponseBodyClients,
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.clients && typeof (this.clients as any).validate === 'function') {
      (this.clients as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

