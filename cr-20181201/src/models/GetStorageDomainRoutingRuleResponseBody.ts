// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RouteItem } from "./RouteItem";


export class GetStorageDomainRoutingRuleResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * 1571926439000
   */
  createTime?: number;
  /**
   * @example
   * 1571926439000
   */
  modifyTime?: number;
  /**
   * @example
   * D4978DCC-ECBD-40B0-A714-EE695******
   */
  requestId?: string;
  routes?: RouteItem[];
  /**
   * @example
   * crsdr-luq6qiegzvx****
   */
  ruleId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      routes: 'Routes',
      ruleId: 'RuleId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      modifyTime: 'number',
      requestId: 'string',
      routes: { 'type': 'array', 'itemType': RouteItem },
      ruleId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

