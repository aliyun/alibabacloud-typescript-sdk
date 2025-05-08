// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRules } from "./ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRules";


export class ListApplicationsWithTagRulesResponseBodyDataResultRouteRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the alert rule is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 653
   */
  id?: number;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  instanceNum?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * dubbo
   */
  name?: string;
  /**
   * @remarks
   * The rate.
   * 
   * @example
   * 10
   */
  rate?: number;
  /**
   * @remarks
   * The details of the routing rule.
   * 
   * @example
   * {
   *   	"dubbo": [{
   *     "serviceName": "com.taobao.hsf.common.DemoService",
   *     "group": "",
   *     "version": "",
   *     "methodName": "sayHello",
   *     "condition": "AND",
   *     "argumentItems": [{
   *     	"index": 0,
   *     	"expr": "",
   *     	"operator": "rawvalue",
   *     	"value": "jim",
   *     	"cond": "=="
   *     }]
   *   	}]
   *   }
   */
  rules?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRules;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * gray
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      id: 'Id',
      instanceNum: 'InstanceNum',
      name: 'Name',
      rate: 'Rate',
      rules: 'Rules',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      id: 'number',
      instanceNum: 'number',
      name: 'string',
      rate: 'number',
      rules: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRules,
      status: 'number',
      tag: 'string',
    };
  }

  validate() {
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

