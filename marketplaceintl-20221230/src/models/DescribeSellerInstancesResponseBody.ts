// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSellerInstancesResponseBodyResult extends $dara.Model {
  appInfo?: string;
  chargeType?: number;
  commodityCode?: string;
  createdOn?: number;
  hostInfo?: string;
  info?: string;
  instanceId?: number;
  instanceStatus?: string;
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
  code?: string;
  count?: number;
  fatal?: boolean;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  result?: DescribeSellerInstancesResponseBodyResult[];
  success?: boolean;
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

