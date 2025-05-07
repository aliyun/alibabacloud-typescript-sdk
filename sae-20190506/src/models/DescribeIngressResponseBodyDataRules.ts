// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIngressResponseBodyDataRulesRuleActions } from "./DescribeIngressResponseBodyDataRulesRuleActions";


export class DescribeIngressResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the application specified in the forwarding rule.
   * 
   * @example
   * 395b60e4-0550-458d-9c54-a265d036****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application specified in the forwarding rules.
   * 
   * @example
   * app1
   */
  appName?: string;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * *   **http**: HTTP is suitable for applications that need to identify the transmitted data.
   * *   **https**: HTTPS is suitable for applications that require encrypted data transmission.
   * *   **grpc**: GRPC is suitable for load balancing scenarios in which you want to deploy services in multi-language frameworks, such as the .NET framework.
   * 
   * This parameter is returned only if the **LoadBalanceType** parameter is set to **ALB** and the **ListenerProtocol** parameter is set to **HTTPS**.
   * 
   * @example
   * HTTP
   */
  backendProtocol?: string;
  /**
   * @remarks
   * Tthe container port of the application specified in the forwarding rules.
   * 
   * @example
   * 8080
   */
  containerPort?: number;
  /**
   * @remarks
   * The domain name of the application specified in the forwarding rules.
   * 
   * @example
   * edas.site
   */
  domain?: string;
  /**
   * @remarks
   * The path of a URL.
   * 
   * @example
   * /path1
   */
  path?: string;
  /**
   * @remarks
   * The path that is used to rewrite the original path.
   * 
   * @example
   * /${1}
   */
  rewritePath?: string;
  ruleActions?: DescribeIngressResponseBodyDataRulesRuleActions[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      backendProtocol: 'BackendProtocol',
      containerPort: 'ContainerPort',
      domain: 'Domain',
      path: 'Path',
      rewritePath: 'RewritePath',
      ruleActions: 'RuleActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      backendProtocol: 'string',
      containerPort: 'number',
      domain: 'string',
      path: 'string',
      rewritePath: 'string',
      ruleActions: { 'type': 'array', 'itemType': DescribeIngressResponseBodyDataRulesRuleActions },
    };
  }

  validate() {
    if(Array.isArray(this.ruleActions)) {
      $dara.Model.validateArray(this.ruleActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

