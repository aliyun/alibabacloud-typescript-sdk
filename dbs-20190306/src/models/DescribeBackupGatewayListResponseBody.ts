// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeBackupGatewayListResponseBodyItemsBackupGateway extends $dara.Model {
  /**
   * @remarks
   * The time when the backup gateway was created, such as 1554560477000.
   * 
   * @example
   * 1554560477000
   */
  backupGatewayCreateTime?: number;
  /**
   * @remarks
   * The ID of the backup gateway.
   * 
   * @example
   * 2321313123
   */
  backupGatewayId?: string;
  /**
   * @remarks
   * The status of the backup gateway. Valid values:
   * 
   * *   ONLINE: The backup gateway is online.
   * *   OFFLINE: The backup gateway is offline.
   * *   STOPPED: The backup gateway is stopped.
   * *   UPGRADING: The backup gateway is being upgraded.
   * 
   * @example
   * ONLINE
   */
  backupGatewayStatus?: string;
  /**
   * @remarks
   * The display name of the backup gateway.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The unique identifier of the backup gateway.
   * 
   * @example
   * sgdsajhdgu
   */
  identifier?: string;
  /**
   * @remarks
   * The last time when a heartbeat message was sent, such as 1554560477000.
   * 
   * @example
   * 1554560477000
   */
  lastHeartbeatTime?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The name of the host on which the backup gateway is installed.
   * 
   * @example
   * test
   */
  sourceEndpointHostname?: string;
  /**
   * @remarks
   * The public IP address of the host on which the backup gateway is installed.
   * 
   * @example
   * XX.XX.XX.XX
   */
  sourceEndpointInternetIP?: string;
  /**
   * @remarks
   * The private IP address of the host on which the backup gateway is installed.
   * 
   * @example
   * XX.XX.XX.XX
   */
  sourceEndpointIntranetIP?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayCreateTime: 'BackupGatewayCreateTime',
      backupGatewayId: 'BackupGatewayId',
      backupGatewayStatus: 'BackupGatewayStatus',
      displayName: 'DisplayName',
      identifier: 'Identifier',
      lastHeartbeatTime: 'LastHeartbeatTime',
      region: 'Region',
      sourceEndpointHostname: 'SourceEndpointHostname',
      sourceEndpointInternetIP: 'SourceEndpointInternetIP',
      sourceEndpointIntranetIP: 'SourceEndpointIntranetIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayCreateTime: 'number',
      backupGatewayId: 'string',
      backupGatewayStatus: 'string',
      displayName: 'string',
      identifier: 'string',
      lastHeartbeatTime: 'number',
      region: 'string',
      sourceEndpointHostname: 'string',
      sourceEndpointInternetIP: 'string',
      sourceEndpointIntranetIP: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupGatewayListResponseBodyItems extends $dara.Model {
  backupGateway?: DescribeBackupGatewayListResponseBodyItemsBackupGateway[];
  static names(): { [key: string]: string } {
    return {
      backupGateway: 'BackupGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGateway: { 'type': 'array', 'itemType': DescribeBackupGatewayListResponseBodyItemsBackupGateway },
    };
  }

  validate() {
    if(Array.isArray(this.backupGateway)) {
      $dara.Model.validateArray(this.backupGateway);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupGatewayListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of backup gateways.
   */
  items?: DescribeBackupGatewayListResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 46361705-8531-492F-807E-A97E482DD4A1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of backup gateways.
   * 
   * @example
   * 0
   */
  totalElements?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      items: DescribeBackupGatewayListResponseBodyItems,
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

