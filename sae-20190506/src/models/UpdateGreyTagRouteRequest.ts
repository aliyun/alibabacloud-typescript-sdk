// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGreyTagRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The grey tag route for an ALB gateway route.
   * 
   * @example
   * [{"condition":"AND","items":[{"cond":"==","name":"grey","operator":"rawvalue","type":"sourceIp","value":"127.0.0.1"},{"cond":"==","name":"grey","operator":"rawvalue","type":"cookie","value":"true"},{"cond":"==","name":"grey","operator":"rawvalue","type":"header","value":"true"}],"path":"/post-echo/hi"}]
   */
  albRules?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Canary release - region-based
   */
  description?: string;
  /**
   * @remarks
   * The grey tag route for a Dubbo application.
   * 
   * @example
   * [{"condition":"OR","group":"DUBBO","items":[{"cond":"==","expr":".key1","index":0,"operator":"rawvalue","value":"value1"},{"cond":"==","expr":".key2","index":0,"operator":"rawvalue","value":"value2"}],"methodName":"echo","serviceName":"com.alibaba.edas.boot.EchoService","version":"1.0.0"}]
   */
  dubboRules?: string;
  /**
   * @remarks
   * The grey tag route ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  greyTagRouteId?: number;
  /**
   * @remarks
   * The grey tag route for a Spring Cloud application.
   * 
   * @example
   * [{"condition":"OR","items":[{"cond":"==","name":"grey","operator":"rawvalue","type":"param","value":"true"},{"cond":"==","name":"grey","operator":"rawvalue","type":"cookie","value":"true"},{"cond":"==","name":"grey","operator":"rawvalue","type":"header","value":"true"}],"path":"/post-echo/hi"}]
   */
  scRules?: string;
  static names(): { [key: string]: string } {
    return {
      albRules: 'AlbRules',
      description: 'Description',
      dubboRules: 'DubboRules',
      greyTagRouteId: 'GreyTagRouteId',
      scRules: 'ScRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albRules: 'string',
      description: 'string',
      dubboRules: 'string',
      greyTagRouteId: 'number',
      scRules: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

