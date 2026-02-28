// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesToCenResponseBodyCenGrantRulesCbnGrantRule extends $dara.Model {
  cenInstanceId?: string;
  cenOwnerId?: number;
  creationTime?: string;
  static names(): { [key: string]: string } {
    return {
      cenInstanceId: 'CenInstanceId',
      cenOwnerId: 'CenOwnerId',
      creationTime: 'CreationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenInstanceId: 'string',
      cenOwnerId: 'number',
      creationTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponseBodyCenGrantRules extends $dara.Model {
  cbnGrantRule?: DescribeGrantRulesToCenResponseBodyCenGrantRulesCbnGrantRule[];
  static names(): { [key: string]: string } {
    return {
      cbnGrantRule: 'CbnGrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cbnGrantRule: { 'type': 'array', 'itemType': DescribeGrantRulesToCenResponseBodyCenGrantRulesCbnGrantRule },
    };
  }

  validate() {
    if(Array.isArray(this.cbnGrantRule)) {
      $dara.Model.validateArray(this.cbnGrantRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponseBody extends $dara.Model {
  cenGrantRules?: DescribeGrantRulesToCenResponseBodyCenGrantRules;
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
   * F5BB78C8-5F41-464F-B9FF-5E0A7198BA26
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
      cenGrantRules: 'CenGrantRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenGrantRules: DescribeGrantRulesToCenResponseBodyCenGrantRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.cenGrantRules && typeof (this.cenGrantRules as any).validate === 'function') {
      (this.cenGrantRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

