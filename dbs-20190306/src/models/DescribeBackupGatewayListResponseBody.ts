// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeBackupGatewayListResponseBodyItemsBackupGateway extends $dara.Model {
  backupGatewayCreateTime?: number;
  backupGatewayId?: string;
  backupGatewayStatus?: string;
  displayName?: string;
  identifier?: string;
  lastHeartbeatTime?: number;
  region?: string;
  sourceEndpointHostname?: string;
  sourceEndpointInternetIP?: string;
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
  items?: DescribeBackupGatewayListResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of records on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46361705-8531-492F-807E-A97E482DD4A1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
   * The total number of pages.
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

