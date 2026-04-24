// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOperatorResponseBodyDataDailyUsage extends $dara.Model {
  /**
   * @example
   * 2026-03-31
   */
  date?: string;
  /**
   * @example
   * 100000
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelOperatorResponseBodyDataKeyUsageListDailyUsage extends $dara.Model {
  /**
   * @example
   * 2026-03-31
   */
  date?: string;
  /**
   * @example
   * 2000
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelOperatorResponseBodyDataKeyUsageList extends $dara.Model {
  /**
   * @remarks
   * API Key
   * 
   * @example
   * sk-rds-*****
   */
  apiKey?: string;
  dailyUsage?: DescribeModelOperatorResponseBodyDataKeyUsageListDailyUsage[];
  /**
   * @example
   * fase
   */
  deleted?: boolean;
  /**
   * @example
   * api-*****
   */
  keyName?: string;
  /**
   * @example
   * fixed
   */
  keyType?: string;
  /**
   * @example
   * 100000
   */
  keyUsed?: string;
  /**
   * @example
   * 2000000
   */
  usedQuota?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      dailyUsage: 'DailyUsage',
      deleted: 'Deleted',
      keyName: 'KeyName',
      keyType: 'KeyType',
      keyUsed: 'KeyUsed',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      dailyUsage: { 'type': 'array', 'itemType': DescribeModelOperatorResponseBodyDataKeyUsageListDailyUsage },
      deleted: 'boolean',
      keyName: 'string',
      keyType: 'string',
      keyUsed: 'string',
      usedQuota: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dailyUsage)) {
      $dara.Model.validateArray(this.dailyUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelOperatorResponseBodyData extends $dara.Model {
  /**
   * @example
   * sk-rds-xxx
   */
  apiKey?: string;
  /**
   * @example
   * False
   */
  autoRenew?: boolean;
  /**
   * @example
   * http://xxx.yy/v1
   */
  baseUrl?: string;
  /**
   * @example
   * PREPAY / POSTPAY
   */
  chargeType?: string;
  dailyUsage?: DescribeModelOperatorResponseBodyDataDailyUsage[];
  /**
   * @example
   * 1775145600000
   */
  endTime?: number;
  /**
   * @example
   * xlarge
   */
  instanceClass?: string;
  /**
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  keyUsageList?: DescribeModelOperatorResponseBodyDataKeyUsageList[];
  /**
   * @example
   * 1772439028000
   */
  startTime?: number;
  /**
   * @example
   * active/creating
   */
  status?: string;
  /**
   * @example
   * 200000000
   */
  totalQuota?: number;
  /**
   * @example
   * 1000000
   */
  usedQuota?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      autoRenew: 'AutoRenew',
      baseUrl: 'BaseUrl',
      chargeType: 'ChargeType',
      dailyUsage: 'DailyUsage',
      endTime: 'EndTime',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      keyUsageList: 'KeyUsageList',
      startTime: 'StartTime',
      status: 'Status',
      totalQuota: 'TotalQuota',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      autoRenew: 'boolean',
      baseUrl: 'string',
      chargeType: 'string',
      dailyUsage: { 'type': 'array', 'itemType': DescribeModelOperatorResponseBodyDataDailyUsage },
      endTime: 'number',
      instanceClass: 'string',
      instanceId: 'string',
      keyUsageList: { 'type': 'array', 'itemType': DescribeModelOperatorResponseBodyDataKeyUsageList },
      startTime: 'number',
      status: 'string',
      totalQuota: 'number',
      usedQuota: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dailyUsage)) {
      $dara.Model.validateArray(this.dailyUsage);
    }
    if(Array.isArray(this.keyUsageList)) {
      $dara.Model.validateArray(this.keyUsageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelOperatorResponseBody extends $dara.Model {
  data?: DescribeModelOperatorResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeModelOperatorResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

