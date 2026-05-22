// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserWafRulesetsResponseBodyRulesets extends $dara.Model {
  /**
   * @example
   * example
   */
  description?: string;
  /**
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      position: 'Position',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
      phase: 'string',
      position: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserWafRulesetsResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  instanceUsage?: number;
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
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  rulesets?: ListUserWafRulesetsResponseBodyRulesets[];
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceUsage: 'InstanceUsage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rulesets: 'Rulesets',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceUsage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rulesets: { 'type': 'array', 'itemType': ListUserWafRulesetsResponseBodyRulesets },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rulesets)) {
      $dara.Model.validateArray(this.rulesets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

