// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiMeteringResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 102277855749****
   */
  aliyunPk?: number;
  /**
   * @example
   * cmapi0004****
   */
  productCode?: string;
  productName?: string;
  totalCapacity?: number;
  /**
   * @example
   * 98
   */
  totalQuota?: number;
  /**
   * @example
   * 220
   */
  totalUsage?: number;
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
   * @example
   * 200
   */
  code?: string;
  /**
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
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 62FC432C55A1A63534A6CB34
   */
  requestId?: string;
  result?: DescribeApiMeteringResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

