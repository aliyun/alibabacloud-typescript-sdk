// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGreyTagRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The canary release rules created for an application that has ALB gateway routing configured.
   * 
   * @example
   * [{"condition":"AND","items":[{"cond":"==","name":"grey","operator":"rawvalue","type":"sourceIp","value":"127.0.0.1"},{"cond":"==","name":"grey","operator":"rawvalue","type":"cookie","value":"true"},{"cond":"==","name":"grey","operator":"rawvalue","type":"header","value":"true"}],"path":"/post-echo/hi"}]
   */
  albRules?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7802c49a-67bc-4167-8369-9a9c003c****
   */
  appId?: string;
  /**
   * @remarks
   * The rule description. It can be up to 64 characters in length.
   * 
   * @example
   * Canary Release - Regions
   */
  description?: string;
  /**
   * @remarks
   * The canary release rules created for a Dubbo application. This parameter is required when your application uses the Dubbo framework. You do not need to specify the **ScRules** parameter.
   * 
   * @example
   * [{"condition":"OR","group":"DUBBO","items":[{"cond":"==","expr":".key1","index":0,"operator":"rawvalue","value":"value1"},{"cond":"==","expr":".key2","index":0,"operator":"rawvalue","value":"value2"}],"methodName":"echo","serviceName":"com.alibaba.edas.boot.EchoService","version":"1.0.0"}]
   */
  dubboRules?: string;
  /**
   * @remarks
   * The rule name. It must start with a lowercase letter, end with a digit or a lowercase letter, and can contain only lowercase letters, Chinese characters, digits, and hyphens (-). It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * dubbo-echo
   */
  name?: string;
  /**
   * @remarks
   * The canary release rules created for a Spring Cloud application. This parameter is required when your application uses the Spring Cloud framework. You do not need to specify the **DubboRules** parameter.
   * 
   * @example
   * [{"condition":"OR","items":[{"cond":"==","name":"grey","operator":"rawvalue","type":"param","value":"true"},{"cond":"==","name":"grey","operator":"rawvalue","type":"cookie","value":"true"},{"cond":"==","name":"grey","operator":"rawvalue","type":"header","value":"true"}],"path":"/post-echo/hi"}]
   */
  scRules?: string;
  static names(): { [key: string]: string } {
    return {
      albRules: 'AlbRules',
      appId: 'AppId',
      description: 'Description',
      dubboRules: 'DubboRules',
      name: 'Name',
      scRules: 'ScRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albRules: 'string',
      appId: 'string',
      description: 'string',
      dubboRules: 'string',
      name: 'string',
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

