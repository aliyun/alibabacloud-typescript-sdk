// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSellerInstancesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * {\\"authUrl\\":\\"https://marketplace.alibabacloud.com/\\"}
   */
  appInfo?: string;
  /**
   * @example
   * 1
   */
  chargeType?: number;
  /**
   * @example
   * sgcmgj000356
   */
  commodityCode?: string;
  /**
   * @example
   * 1741752000000
   */
  createdOn?: number;
  /**
   * @example
   * {\\"userName\\":\\"marketplace\\"}
   */
  hostInfo?: string;
  /**
   * @example
   * {\\"userName\\":\\"marketplace\\"}
   */
  info?: string;
  /**
   * @example
   * 5000002763123
   */
  instanceId?: number;
  /**
   * @example
   * OPENED
   */
  instanceStatus?: string;
  /**
   * @example
   * 5322460655123456
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      createdOn: 'CreatedOn',
      hostInfo: 'HostInfo',
      info: 'Info',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: 'string',
      chargeType: 'number',
      commodityCode: 'string',
      createdOn: 'number',
      hostInfo: 'string',
      info: 'string',
      instanceId: 'number',
      instanceStatus: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSellerInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * fatal
   * 
   * @example
   * False
   */
  fatal?: boolean;
  /**
   * @example
   * Instance 5723f7ee-952d-411f-94f4-b942a550d9b8 does not exist.
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * A6A33748-D573-593C-A3BC-593E33D68311
   */
  requestId?: string;
  result?: DescribeSellerInstancesResponseBodyResult[];
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 103
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      fatal: 'Fatal',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      fatal: 'boolean',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeSellerInstancesResponseBodyResult },
      success: 'boolean',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

