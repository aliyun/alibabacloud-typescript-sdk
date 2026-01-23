// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RouteItem } from "./RouteItem";


export class UpdateStorageDomainRoutingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The route list
   * 
   * This parameter is required.
   */
  routes?: RouteItem[];
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crsdr-b6thg027zmk1****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      routes: 'Routes',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      routes: { 'type': 'array', 'itemType': RouteItem },
      ruleId: 'string',
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

