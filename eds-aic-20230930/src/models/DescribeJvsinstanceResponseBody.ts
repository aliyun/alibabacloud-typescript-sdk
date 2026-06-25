// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJVSInstanceResponseBodyDataCreditConfig extends $dara.Model {
  /**
   * @remarks
   * The Credit limit.
   * 
   * @example
   * -1
   */
  creditLimit?: number;
  /**
   * @remarks
   * The limit period.
   * 
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
   * @remarks
   * The amount of Credit.
   * 
   * @example
   * 5
   */
  credit?: number;
  /**
   * @remarks
   * The calculation period for used Credit.
   * 
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
   * @remarks
   * The time the instance was created.
   * 
   * @example
   * 2026-04-10T01:31:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The Credit limit configuration. If you apply multiple configurations, the latest one overwrites the others.
   */
  creditConfig?: DescribeJVSInstanceResponseBodyDataCreditConfig[];
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2026-04-10T01:31:32Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * null
   */
  jvsPackageId?: string;
  /**
   * @remarks
   * The time the instance was last modified.
   * 
   * @example
   * 2026-04-10T01:31:32Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNNING
   */
  status?: string;
  /**
   * @remarks
   * The amount of used Credit.
   */
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
  /**
   * @remarks
   * A list of JVS instances.
   */
  data?: DescribeJVSInstanceResponseBodyData[];
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If this field is empty, there are no more results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

