// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndAttachPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * List of attachment point IDs.
   * 
   * This parameter is required.
   */
  attachResourceIds?: string[];
  /**
   * @remarks
   * Types of attachment points supported by the policy.
   * 
   * - HttpApi: HttpApi.
   * - Operation: Operation of HttpApi.
   * - GatewayRoute: Gateway route.
   * - GatewayService: Gateway service.
   * - GatewayServicePort: Gateway service port.
   * - Domain: Gateway domain.
   * - Gateway: Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The class name types supported by the policy. Different policies support different attachment points, to be used in conjunction with `attachResourceType`.
   * 
   * - RateLimit: Traffic control, supports HttpApi, Operation, GatewayRoute.
   * - ConcurrencyLimit: Concurrency control, supports HttpApi, Operation, GatewayRoute.
   * - CircuitBreaker: Circuit breaking and degradation, supports HttpApi, Operation, GatewayRoute.
   * - HttpRewrite: HTTP rewrite, supports HttpApi, Operation, GatewayRoute.
   * - HeaderModify: Header modification, supports HttpApi, Operation, GatewayRoute.
   * - Cors: Cross-origin, supports HttpApi, Operation, GatewayRoute.
   * - FlowCopy: Traffic replication, supports HttpApi, Operation, GatewayRoute.
   * - Timeout: Timeout, supports HttpApi, Operation, GatewayRoute.
   * - Retry: Retry, supports HttpApi, Operation, GatewayRoute.
   * - IpAccessControl: IP access control, supports HttpApi, Operation, GatewayRoute, Domain, Gateway.
   * - DirectResponse: Mock, supports Operation, GatewayRoute.
   * - Redirect: Redirection, supports GatewayRoute.
   * - Fallback: Fallback, supports Operation, GatewayRoute.
   * - ServiceTls: Service TLS authentication, supports GatewayService.
   * - ServiceLb: Service load balancing, supports GatewayService.
   * - ServicePortTls: Service port TLS authentication, supports GatewayServicePort.
   * 
   * - Waf: WAF protection, supports GatewayRoute, Gateway.
   * - JWTAuth: JWT global authentication, supports Gateway.
   * - OIDCAuth: OIDC global authentication, supports Gateway.
   * - ExternalZAuth: Custom authorization, supports Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * IpAccessControl
   */
  className?: string;
  /**
   * @remarks
   * Configuration information.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"enable\\":false}
   */
  config?: string;
  /**
   * @remarks
   * Policy description.
   * 
   * @example
   * 这是策略描述
   */
  description?: string;
  /**
   * @remarks
   * Environment ID.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * Gateway ID.
   * 
   * @example
   * gw-cq7l5s5lhtgi6qasrdc0
   */
  gatewayId?: string;
  /**
   * @remarks
   * Policy name.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceIds: 'attachResourceIds',
      attachResourceType: 'attachResourceType',
      className: 'className',
      config: 'config',
      description: 'description',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceIds: { 'type': 'array', 'itemType': 'string' },
      attachResourceType: 'string',
      className: 'string',
      config: 'string',
      description: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachResourceIds)) {
      $dara.Model.validateArray(this.attachResourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

