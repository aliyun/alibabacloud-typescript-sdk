// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Attachment } from "./Attachment";


export class PolicyInfo extends $dara.Model {
  /**
   * @remarks
   * The mount information.
   */
  attachments?: Attachment[];
  /**
   * @remarks
   * The policy class alias.
   */
  classAlias?: string;
  /**
   * @remarks
   * The class name supported by the policy. Different policies support different mount points. This parameter is used in combination with AttachResourceType.
   * 
   * *   RateLimit: throttles traffic. Supported: HttpApi, Operation, and GatewayRoute.
   * *   ConcurrencyLimit: controls concurrency. Supported: HttpApi, Operation, and GatewayRoute.
   * *   CircuitBreaker: breaks circuits and downgrades traffic. Supported: HttpApi, Operation, and GatewayRoute.
   * *   HttpRewrite: rewrites HTTP traffic. Supported: HttpApi, Operation, and GatewayRoute.
   * *   HeaderModify: modifies headers. Supported: HttpApi, Operation, and GatewayRoute.
   * *   Cors: supports CORS. Supported: HttpApi, Operation, and GatewayRoute.
   * *   FlowCopy: replicates traffic. Supported: HttpApi, Operation, and GatewayRoute.
   * *   Timeout: times out requests. Supported: HttpApi, Operation, and GatewayRoute.
   * *   Retry: retries requests. Supported: HttpApi, Operation, and GatewayRoute.
   * *   IpAccessControl: implements IP address-based access control. Supported: HttpApi, Operation, GatewayRoute, Domain, and Gateway.
   * *   DirectResponse: mocks responses. Supported: Operation and GatewayRoute.
   * *   Redirect: redirects traffic. Supported: GatewayRoute.
   * *   Fallback: implements fallback. Supported: Operation and GatewayRoute.
   * *   ServiceTls: implements TLS authentication. Supported: GatewayService.
   * *   ServiceLb: balances loads. Supported: GatewayService.
   * *   ServicePortTls: implements service port TLS authentication. Supported: GatewayServicePort.
   * *   Waf: implements WAF protection. Supported: GatewayRoute and Gateway.
   * *   JWTAuth: implements global JWT authentication. Supported: Gateway.
   * *   OIDCAuth: implements global OIDC authentication. Supported: Gateway.
   * *   ExternalZAuth: implements custom authentication. Supported: Gateway.
   */
  className?: string;
  /**
   * @remarks
   * The policy configurations.
   * 
   * @example
   * {"enable":false}
   */
  config?: string;
  /**
   * @remarks
   * The direction of traffic on which the policy takes effect. Valid values:
   * 
   * *   OutBound
   * *   InBound
   * *   Both
   * 
   * @example
   * InBound
   */
  direction?: string;
  /**
   * @remarks
   * The execution priority.
   * 
   * @example
   * 310
   */
  executePriority?: string;
  /**
   * @remarks
   * The execution phase.
   * 
   * Valid values:
   * 
   * *   PluginStatistic
   * *   PluginAuthorization
   * *   PluginPre
   * *   PluginAuthentication
   * *   PluginDefault
   * *   PluginPost
   * 
   * @example
   * PluginPost
   */
  executeStage?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test-policy
   */
  name?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * p-cq7l5s5lhtgi6qasrdc0
   */
  policyId?: string;
  /**
   * @remarks
   * The policy type.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'attachments',
      classAlias: 'classAlias',
      className: 'className',
      config: 'config',
      direction: 'direction',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      name: 'name',
      policyId: 'policyId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': Attachment },
      classAlias: 'string',
      className: 'string',
      config: 'string',
      direction: 'string',
      executePriority: 'string',
      executeStage: 'string',
      name: 'string',
      policyId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

