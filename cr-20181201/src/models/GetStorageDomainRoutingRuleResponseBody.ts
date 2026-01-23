// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RouteItem } from "./RouteItem";


export class GetStorageDomainRoutingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1571926439000
   */
  createTime?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1571926439000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4978DCC-ECBD-40B0-A714-EE695******
   */
  requestId?: string;
  /**
   * @remarks
   * The routing list.
   */
  routes?: RouteItem[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * crsdr-luq6qiegzvx****
   */
  ruleId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
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

