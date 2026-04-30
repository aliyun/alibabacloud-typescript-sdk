// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJVSInstanceResponseBodyDataCreditConfig extends $dara.Model {
  /**
   * @example
   * -1
   */
  creditLimit?: number;
  /**
   * @example
   * day
   */
  limitPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      creditLimit: 'CreditLimit',
      limitPeriod: 'LimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditLimit: 'number',
      limitPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJVSInstanceResponseBodyDataUsedCredit extends $dara.Model {
  /**
   * @example
   * 5
   */
  credit?: number;
  /**
   * @example
   * day
   */
  limitPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      credit: 'Credit',
      limitPeriod: 'LimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credit: 'number',
      limitPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJVSInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2026-04-10T01:31:32Z
   */
  createTime?: string;
  creditConfig?: DescribeJVSInstanceResponseBodyDataCreditConfig[];
  /**
   * @example
   * 2026-04-10T01:31:32Z
   */
  expireTime?: string;
  /**
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @example
   * null
   */
  jvsPackageId?: string;
  /**
   * @example
   * 2026-04-10T01:31:32Z
   */
  modifyTime?: string;
  /**
   * @example
   * RUNNNING
   */
  status?: string;
  usedCredit?: DescribeJVSInstanceResponseBodyDataUsedCredit[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creditConfig: 'CreditConfig',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      jvsPackageId: 'JvsPackageId',
      modifyTime: 'ModifyTime',
      status: 'Status',
      usedCredit: 'UsedCredit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creditConfig: { 'type': 'array', 'itemType': DescribeJVSInstanceResponseBodyDataCreditConfig },
      expireTime: 'string',
      instanceId: 'string',
      jvsPackageId: 'string',
      modifyTime: 'string',
      status: 'string',
      usedCredit: { 'type': 'array', 'itemType': DescribeJVSInstanceResponseBodyDataUsedCredit },
    };
  }

  validate() {
    if(Array.isArray(this.creditConfig)) {
      $dara.Model.validateArray(this.creditConfig);
    }
    if(Array.isArray(this.usedCredit)) {
      $dara.Model.validateArray(this.usedCredit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJVSInstanceResponseBody extends $dara.Model {
  data?: DescribeJVSInstanceResponseBodyData[];
  /**
   * @remarks
   * 当前页实际返回条数
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * 下一页游标，末页不返回
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * 符合条件的总记录数
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeJVSInstanceResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

