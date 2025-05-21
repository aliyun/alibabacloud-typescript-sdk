// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Policy type, including RateLimit, ConcurrencyLimit, CircuitBreaker, HttpRewrite, HeaderModify, Cors, Authentication, FlowCopy, Timeout, Retry, IpAccessControl, DirectResponse, Redirect, Fallback, ServiceTls, ServiceLb, ServicePortTls, Waf, JWTAuth, OIDCAuth, ExternalZAuth, AiProxy, ModelRouter, AiStatistics, AiSecurityGuard, AiFallback, ModelMapper, AiTokenRateLimit, AiCache, DynamicRoute
   * 
   * This parameter is required.
   * 
   * @example
   * Timeout
   */
  className?: string;
  /**
   * @remarks
   * Policy configuration
   * 
   * This parameter is required.
   * 
   * @example
   * {"unitNum":1,"timeUnit":"s","enable":true}
   */
  config?: string;
  /**
   * @remarks
   * Policy description
   * 
   * @example
   * timeout policy
   */
  description?: string;
  /**
   * @remarks
   * Policy name
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

