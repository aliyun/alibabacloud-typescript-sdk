// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndAttachPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the resources to be associated with the policy.
   * 
   * This parameter is required.
   */
  attachResourceIds?: string[];
  /**
   * @remarks
   * The supported resource type. Valid values:
   * 
   * *   HttpApi: an HTTP API
   * *   Operation: an operation in an HTTP API
   * *   GatewayRoute: a route
   * *   GatewayService: a service
   * *   GatewayServicePort: a service port
   * *   Domain: a domain name
   * *   Gateway: an instance
   * 
   * This parameter is required.
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The class name supported by the policy. Different policies support different resources. This parameter is used in combination with AttachResourceType.
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
   * 
   * This parameter is required.
   * 
   * @example
   * IpAccessControl
   */
  className?: string;
  /**
   * @remarks
   * The policy configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"enable\\":false}
   */
  config?: string;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * This is the policy description.
   */
  description?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gw-cq7l5s5lhtgi6qasrdc0
   */
  gatewayId?: string;
  /**
   * @remarks
   * The policy name.
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

