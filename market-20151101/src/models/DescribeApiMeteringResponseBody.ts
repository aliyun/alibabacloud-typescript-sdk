// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiMeteringResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud primary key.
   * 
   * @example
   * 102277855749****
   */
  aliyunPk?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmapi0004****
   */
  productCode?: string;
  /**
   * @remarks
   * The commodity name.
   * 
   * @example
   * 身份证实名认证-身份证实名
   */
  productName?: string;
  totalCapacity?: number;
  /**
   * @remarks
   * The remaining quota.
   * 
   * @example
   * 98
   */
  totalQuota?: number;
  /**
   * @remarks
   * The usage.
   * 
   * @example
   * 220
   */
  totalUsage?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * 次
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'AliyunPk',
      productCode: 'ProductCode',
      productName: 'ProductName',
      totalCapacity: 'TotalCapacity',
      totalQuota: 'TotalQuota',
      totalUsage: 'TotalUsage',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'number',
      productCode: 'string',
      productName: 'string',
      totalCapacity: 'number',
      totalQuota: 'number',
      totalUsage: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMeteringResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * fatal
   * 
   * @example
   * false
   */
  fatal?: boolean;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * "成功"
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 62FC432C55A1A63534A6CB34
   */
  requestId?: string;
  /**
   * @remarks
   * The list of results.
   */
  result?: DescribeApiMeteringResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 1.0
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
      result: { 'type': 'array', 'itemType': DescribeApiMeteringResponseBodyResult },
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

