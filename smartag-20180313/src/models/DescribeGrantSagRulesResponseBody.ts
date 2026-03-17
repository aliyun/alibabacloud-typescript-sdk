// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantSagRulesResponseBodyGrantRulesGrantRule extends $dara.Model {
  ccnInstanceId?: string;
  ccnUid?: number;
  createTime?: number;
  grantTrafficService?: boolean;
  instanceId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ccnInstanceId: 'CcnInstanceId',
      ccnUid: 'CcnUid',
      createTime: 'CreateTime',
      grantTrafficService: 'GrantTrafficService',
      instanceId: 'InstanceId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnInstanceId: 'string',
      ccnUid: 'number',
      createTime: 'number',
      grantTrafficService: 'boolean',
      instanceId: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagRulesResponseBodyGrantRules extends $dara.Model {
  grantRule?: DescribeGrantSagRulesResponseBodyGrantRulesGrantRule[];
  static names(): { [key: string]: string } {
    return {
      grantRule: 'GrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRule: { 'type': 'array', 'itemType': DescribeGrantSagRulesResponseBodyGrantRulesGrantRule },
    };
  }

  validate() {
    if(Array.isArray(this.grantRule)) {
      $dara.Model.validateArray(this.grantRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagRulesResponseBody extends $dara.Model {
  grantRules?: DescribeGrantSagRulesResponseBodyGrantRules;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6E1674AC-083C-4031-B047-7A66E418E0C6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      grantRules: 'GrantRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRules: DescribeGrantSagRulesResponseBodyGrantRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.grantRules && typeof (this.grantRules as any).validate === 'function') {
      (this.grantRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

