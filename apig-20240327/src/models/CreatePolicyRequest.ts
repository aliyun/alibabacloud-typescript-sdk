// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - RateLimit: rate limiting. Limits the request rate.
   * - ConcurrencyLimit: concurrency limiting. Limits the number of concurrent requests.
   * - CircuitBreaker: circuit breaker. Automatically triggers circuit breaking when backend exceptions occur.
   * - HttpRewrite: HTTP rewrite. Rewrites the request URL or path.
   * - HeaderModify: header modification. Adds, removes, or modifies HTTP request headers.
   * - Cors: Cross-Origin Resource Sharing (CORS). Controls cross-origin requests.
   * - Authentication: general authentication. A general request authentication policy.
   * - FlowCopy: traffic mirroring. Copies requests to an additional backend.
   * - Timeout: timeout. Sets the request timeout period.
   * - Retry: retry. Automatically retries failed requests.
   * - IpAccessControl: IP access control. Filters requests based on IP whitelists and blacklists.
   * - DirectResponse: direct response. Returns a fixed response directly.
   * - Redirect: redirect. Redirects requests to another address.
   * - Fallback: fallback. Returns a fallback response when the backend is unavailable.
   * - ServiceTls: server-side TLS. Configures TLS for backend services.
   * - ServiceLb: service load balancing. Configures load balancing for backend services.
   * - ServicePortTls: service port TLS. Configures TLS for backend service ports.
   * - Waf: Web Application Firewall (WAF). Provides request security protection.
   * - JWTAuth: JWT authentication. Authenticates requests based on JSON Web Tokens (JWT).
   * - OIDCAuth: OIDC authentication. Authenticates requests based on the OpenID Connect (OIDC) protocol.
   * - ExternalZAuth: external authentication. Integrates with an external authentication service.
   * - AiProxy: AI proxy.
   * - ModelRouter: model router.
   * - AiStatistics: AI statistics.
   * - AiSecurityGuard: AI security guard. Detects the security of AI request and response content.
   * - AiFallback: AI fallback. Falls back to an alternative model when the AI service is unavailable.
   * - ModelMapper: model mapper.
   * - AiTokenRateLimit: AI token rate limiting. Limits the rate based on token consumption.
   * - AiCache: AI cache. Caches AI response results.
   * - DynamicRoute: dynamic route.
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
   * The description.
   * 
   * @example
   * 超时策略
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

