// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantSagVbrRulesResponseBodyGrantRulesGrantRule extends $dara.Model {
  bound?: boolean;
  createTime?: number;
  instanceId?: string;
  smartAGId?: string;
  smartAGUid?: number;
  vbrInstanceId?: string;
  vbrRegionId?: string;
  vbrUid?: number;
  static names(): { [key: string]: string } {
    return {
      bound: 'Bound',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      smartAGId: 'SmartAGId',
      smartAGUid: 'SmartAGUid',
      vbrInstanceId: 'VbrInstanceId',
      vbrRegionId: 'VbrRegionId',
      vbrUid: 'VbrUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bound: 'boolean',
      createTime: 'number',
      instanceId: 'string',
      smartAGId: 'string',
      smartAGUid: 'number',
      vbrInstanceId: 'string',
      vbrRegionId: 'string',
      vbrUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagVbrRulesResponseBodyGrantRules extends $dara.Model {
  grantRule?: DescribeGrantSagVbrRulesResponseBodyGrantRulesGrantRule[];
  static names(): { [key: string]: string } {
    return {
      grantRule: 'GrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRule: { 'type': 'array', 'itemType': DescribeGrantSagVbrRulesResponseBodyGrantRulesGrantRule },
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

export class DescribeGrantSagVbrRulesResponseBody extends $dara.Model {
  grantRules?: DescribeGrantSagVbrRulesResponseBodyGrantRules;
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
   * The number of entries returned per page.
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
   * 46E98E69-FBA2-423E-9E5A-A3C6D843FED1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of authorization rules.
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
      grantRules: DescribeGrantSagVbrRulesResponseBodyGrantRules,
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

