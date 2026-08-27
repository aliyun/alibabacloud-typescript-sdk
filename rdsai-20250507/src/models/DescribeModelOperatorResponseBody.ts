// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOperatorResponseBodyDataDailyUsage extends $dara.Model {
  /**
   * @remarks
   * The date (accurate to the day).
   * 
   * @example
   * 2026-03-31
   */
  date?: string;
  /**
   * @remarks
   * The token usage.
   * 
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
   * @remarks
   * The date (accurate to the day).
   * 
   * @example
   * 2026-03-31
   */
  date?: string;
  /**
   * @remarks
   * The number of tokens used.
   * 
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
  /**
   * @remarks
   * The daily usage of the API key.
   */
  dailyUsage?: DescribeModelOperatorResponseBodyDataKeyUsageListDailyUsage[];
  /**
   * @remarks
   * Indicates whether the API key is deleted.
   * 
   * @example
   * fase
   */
  deleted?: boolean;
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * api-*****
   */
  keyName?: string;
  /**
   * @remarks
   * The key type.
   * 
   * @example
   * fixed
   */
  keyType?: string;
  /**
   * @remarks
   * The total token usage.
   * 
   * @example
   * 100000
   */
  keyUsed?: string;
  /**
   * @remarks
   * The used token quota.
   * 
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
   * @remarks
   * The system API key.
   * 
   * @example
   * sk-rds-xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance. Valid values:
   * 
   * * **true**: Enabled.
   * * **false** (default): Disabled.
   * 
   * @example
   * False
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The URL for model invocation.
   * 
   * @example
   * http://xxx.yy/v1
   */
  baseUrl?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * PREPAY / POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The daily usage list.
   */
  dailyUsage?: DescribeModelOperatorResponseBodyDataDailyUsage[];
  /**
   * @remarks
   * The end time of the instance. Format: Timestamp.
   * 
   * @example
   * 1775145600000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * xlarge
   */
  instanceClass?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @remarks
   * The usage of each key (including deleted keys).
   */
  keyUsageList?: DescribeModelOperatorResponseBodyDataKeyUsageList[];
  /**
   * @remarks
   * Indicates whether the prefix routing persistence feature is enabled.
   * 
   * @example
   * false
   */
  prefixCacheEnabled?: boolean;
  /**
   * @remarks
   * The list of headers used for routing persistence. The headers consist of lowercase letters, digits, and hyphens (-).
   */
  sessionIds?: string[];
  /**
   * @remarks
   * The start time of the instance. Format: Timestamp.
   * 
   * @example
   * 1772439028000
   */
  startTime?: number;
  /**
   * @remarks
   * The module status.
   * 
   * @example
   * active/creating
   */
  status?: string;
  /**
   * @remarks
   * The total quota for the current cycle (such as the monthly total).
   * 
   * @example
   * 200000000
   */
  totalQuota?: number;
  /**
   * @remarks
   * The used quota for the current cycle (such as the monthly usage).
   * 
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
      prefixCacheEnabled: 'PrefixCacheEnabled',
      sessionIds: 'SessionIds',
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
      prefixCacheEnabled: 'boolean',
      sessionIds: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.sessionIds)) {
      $dara.Model.validateArray(this.sessionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelOperatorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request result.
   */
  data?: DescribeModelOperatorResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
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
   * @remarks
   * The request result.
   * 
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

