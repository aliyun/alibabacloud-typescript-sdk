// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Attachment } from "./Attachment";


export class PolicyInfo extends $dara.Model {
  /**
   * @remarks
   * The list of mount information.
   */
  attachments?: Attachment[];
  /**
   * @remarks
   * The policy class alias.
   * 
   * @example
   * Throttling
   */
  classAlias?: string;
  /**
   * @remarks
   * The class name supported by the policy. Different policies support different mount points. This parameter is used together with AttachResourceType. Valid values:
   * 
   * - RateLimit: throttling. Supported for HttpApi, Operation, and GatewayRoute.
   * - ConcurrencyLimit: concurrency control. Supported for HttpApi, Operation, and GatewayRoute.
   * - CircuitBreaker: circuit breaking. Supported for HttpApi, Operation, and GatewayRoute.
   * - HttpRewrite: HTTP rewrite. Supported for HttpApi, Operation, and GatewayRoute.
   * - HeaderModify: header modification. Supported for HttpApi, Operation, and GatewayRoute.
   * - Cors: cross-origin resource sharing (CORS). Supported for HttpApi, Operation, and GatewayRoute.
   * - FlowCopy: traffic copy. Supported for HttpApi, Operation, and GatewayRoute.
   * - Timeout: timeout. Supported for HttpApi, Operation, and GatewayRoute.
   * - Retry: retry. Supported for HttpApi, Operation, and GatewayRoute.
   * - IpAccessControl: IP access control. Supported for HttpApi, Operation, GatewayRoute, Domain, and Gateway.
   * - DirectResponse: mock. Supported for Operation and GatewayRoute.
   * - Redirect: redirect. Supported for GatewayRoute.
   * - Fallback: fallback. Supported for Operation and GatewayRoute.
   * - ServiceTls: service TLS authentication. Supported for GatewayService.
   * - ServiceLb: service load balancing. Supported for GatewayService.
   * - ServicePortTls: service port TLS authentication. Supported for GatewayServicePort.
   * - Waf: WAF protection. Supported for GatewayRoute and Gateway.
   * - JWTAuth: JWT global authentication. Supported for Gateway.
   * - OIDCAuth: OIDC global authentication. Supported for Gateway.
   * - ExternalZAuth: custom authentication. Supported for Gateway.
   * 
   * @example
   * RateLimit
   */
  className?: string;
  /**
   * @remarks
   * The policy configuration.
   * 
   * @example
   * {"enable":false}
   */
  config?: string;
  /**
   * @remarks
   * The inbound or outbound direction of the policy. Valid values:
   * 
   * - OutBound: outbound.
   * - InBound: inbound.
   * - Both: both directions.
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
   * The execution stage.
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
   * 
   * @example
   * Policy type
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

