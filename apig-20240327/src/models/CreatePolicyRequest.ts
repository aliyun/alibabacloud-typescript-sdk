// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - RateLimit: Rate limiting. Limits the request rate.
   * - ConcurrencyLimit: Concurrency limiting. Limits the number of concurrent requests.
   * - CircuitBreaker: Circuit breaker. Automatically triggers circuit breaking when backend exceptions occur.
   * - HttpRewrite: HTTP rewrite. Rewrites the request URL or path.
   * - HeaderModify: Header modification. Adds, removes, or modifies HTTP request headers.
   * - Cors: Cross-Origin Resource Sharing (CORS). Controls cross-origin requests.
   * - Authentication: General authentication. A general request authentication policy.
   * - FlowCopy: Traffic mirroring. Copies requests to an additional backend.
   * - Timeout: Timeout. Sets the request timeout period.
   * - Retry: Retry. Automatically retries failed requests.
   * - IpAccessControl: IP access control. Filters requests based on IP address whitelists and blacklists.
   * - DirectResponse: Direct response. Returns a fixed response directly.
   * - Redirect: Redirect. Redirects requests to another address.
   * - Fallback: Fallback. Returns a fallback response when the backend is unavailable.
   * - ServiceTls: Service TLS. Configures TLS for backend services.
   * - ServiceLb: Service load balancing. Configures load balancing for backend services.
   * - ServicePortTls: Service port TLS. Configures TLS for backend service ports.
   * - Waf: Web Application Firewall (WAF). Provides request security protection.
   * - JWTAuth: JWT authentication. Authenticates requests based on JSON Web Tokens (JWT).
   * - OIDCAuth: OIDC authentication. Authenticates requests based on the OpenID Connect (OIDC) protocol.
   * - ExternalZAuth: External authentication. Integrates with an external authentication service.
   * - AiProxy: AI proxy.
   * - ModelRouter: Model router.
   * - AiStatistics: AI statistics.
   * - AiSecurityGuard: AI security guard. Detects the security of AI request and response content.
   * - AiFallback: AI fallback. Falls back to an alternative model when the AI service is unavailable.
   * - ModelMapper: Model mapper.
   * - AiTokenRateLimit: AI token rate limiting. Limits the rate based on token consumption.
   * - AiCache: AI cache. Caches AI response results.
   * - DynamicRoute: Dynamic route.
   * 
   * This parameter is required.
   * 
   * @example
   * Timeout
   */
  className?: string;
  /**
   * @remarks
   * The policy configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * {"unitNum":1,"timeUnit":"s","enable":true}
   */
  config?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Timeout policy
   */
  description?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-policy
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'className',
      config: 'config',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      config: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

