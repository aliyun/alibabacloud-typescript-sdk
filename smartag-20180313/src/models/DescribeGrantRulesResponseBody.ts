// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesResponseBodyGrantRulesGrantRule extends $dara.Model {
  ccnInstanceId?: string;
  ccnUid?: number;
  cenInstanceId?: string;
  cenUid?: number;
  gmtCreate?: number;
  gmtModified?: number;
  grantRuleId?: string;
  grantTrafficService?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ccnInstanceId: 'CcnInstanceId',
      ccnUid: 'CcnUid',
      cenInstanceId: 'CenInstanceId',
      cenUid: 'CenUid',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      grantRuleId: 'GrantRuleId',
      grantTrafficService: 'GrantTrafficService',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnInstanceId: 'string',
      ccnUid: 'number',
      cenInstanceId: 'string',
      cenUid: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      grantRuleId: 'string',
      grantTrafficService: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesResponseBodyGrantRules extends $dara.Model {
  grantRule?: DescribeGrantRulesResponseBodyGrantRulesGrantRule[];
  static names(): { [key: string]: string } {
    return {
      grantRule: 'GrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRule: { 'type': 'array', 'itemType': DescribeGrantRulesResponseBodyGrantRulesGrantRule },
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

export class DescribeGrantRulesResponseBody extends $dara.Model {
  grantRules?: DescribeGrantRulesResponseBodyGrantRules;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
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
   * FA579C2D-84A0-4BA1-B9C3-1E5A3B15F1B6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
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
      grantRules: DescribeGrantRulesResponseBodyGrantRules,
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

