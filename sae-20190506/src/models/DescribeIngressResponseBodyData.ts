// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIngressResponseBodyDataCorsConfig } from "./DescribeIngressResponseBodyDataCorsConfig";
import { DescribeIngressResponseBodyDataDefaultRule } from "./DescribeIngressResponseBodyDataDefaultRule";
import { DescribeIngressResponseBodyDataRules } from "./DescribeIngressResponseBodyDataRules";


export class DescribeIngressResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate that is associated with a Classic Load Balancer (**CLB**) instance.
   * 
   * @example
   * 13623****809_16cad216b32_845_-419427029
   */
  certId?: string;
  /**
   * @remarks
   * The ID of the certificate that is associated with an Application Load Balancer **ALB** instance.
   * 
   * @example
   * 87***35-cn-hangzhou,812***3-cn-hangzhou
   */
  certIds?: string;
  corsConfig?: DescribeIngressResponseBodyDataCorsConfig;
  createdBySae?: boolean;
  /**
   * @remarks
   * The default rule.
   */
  defaultRule?: DescribeIngressResponseBodyDataDefaultRule;
  /**
   * @remarks
   * The name of a routing rule.
   * 
   * @example
   * ingress-sae-test
   */
  description?: string;
  enableXForwardedFor?: boolean;
  enableXForwardedForClientSrcPort?: boolean;
  enableXForwardedForProto?: boolean;
  enableXForwardedForSlbId?: boolean;
  enableXForwardedForSlbPort?: boolean;
  /**
   * @remarks
   * The ID of a routing rule.
   * 
   * @example
   * 87
   */
  id?: number;
  /**
   * @example
   * 3
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The listener ports for an SLB instance.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The protocol used to forward requests. Valid values:
   * 
   * *   **HTTP**: HTTP is suitable for applications that need to identify the transmitted data.
   * *   **HTTPS**: HTTPS is suitable for applications that require encrypted data transmission.
   * 
   * This parameter is optional in the **CreateIngress** and **UpadateIngress** operations. If you do not configure this parameter when you call the CreateIngress or UpdateIngress operation to create or update a gateway routing rule, this parameter is not returned for the corresponding response.
   * 
   * @example
   * HTTP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The type of SLB instances. Valid values:
   * 
   * *   **clb**: Classic Load Balancer (formerly known as SLB).
   * *   **alb**: Application Load Balancer.
   * 
   * @example
   * clb
   */
  loadBalanceType?: string;
  /**
   * @remarks
   * The name of a routing rule.
   * 
   * @example
   * lb-uf6jt0nu4z6ior943****-80-f5****
   */
  name?: string;
  /**
   * @remarks
   * The ID of a namespace.
   * 
   * @example
   * cn-beijing:sae-test
   */
  namespaceId?: string;
  /**
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The forwarding rules.
   */
  rules?: DescribeIngressResponseBodyDataRules[];
  /**
   * @example
   * sp-n0kn923****
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The ID of a Server Load Balancer (SLB) instance.
   * 
   * @example
   * lb-uf62****6d13tq2u5
   */
  slbId?: string;
  /**
   * @remarks
   * The type of an SLB instance. Valid values:
   * 
   * *   **internet**: an Internet-facing SLB instance
   * *   **intranet**: an Intranet-facing SLB instance
   * 
   * @example
   * internet
   */
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certIds: 'CertIds',
      corsConfig: 'CorsConfig',
      createdBySae: 'CreatedBySae',
      defaultRule: 'DefaultRule',
      description: 'Description',
      enableXForwardedFor: 'EnableXForwardedFor',
      enableXForwardedForClientSrcPort: 'EnableXForwardedForClientSrcPort',
      enableXForwardedForProto: 'EnableXForwardedForProto',
      enableXForwardedForSlbId: 'EnableXForwardedForSlbId',
      enableXForwardedForSlbPort: 'EnableXForwardedForSlbPort',
      id: 'Id',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalanceType: 'LoadBalanceType',
      name: 'Name',
      namespaceId: 'NamespaceId',
      requestTimeout: 'RequestTimeout',
      rules: 'Rules',
      securityPolicyId: 'SecurityPolicyId',
      slbId: 'SlbId',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certIds: 'string',
      corsConfig: DescribeIngressResponseBodyDataCorsConfig,
      createdBySae: 'boolean',
      defaultRule: DescribeIngressResponseBodyDataDefaultRule,
      description: 'string',
      enableXForwardedFor: 'boolean',
      enableXForwardedForClientSrcPort: 'boolean',
      enableXForwardedForProto: 'boolean',
      enableXForwardedForSlbId: 'boolean',
      enableXForwardedForSlbPort: 'boolean',
      id: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalanceType: 'string',
      name: 'string',
      namespaceId: 'string',
      requestTimeout: 'number',
      rules: { 'type': 'array', 'itemType': DescribeIngressResponseBodyDataRules },
      securityPolicyId: 'string',
      slbId: 'string',
      slbType: 'string',
    };
  }

  validate() {
    if(this.corsConfig && typeof (this.corsConfig as any).validate === 'function') {
      (this.corsConfig as any).validate();
    }
    if(this.defaultRule && typeof (this.defaultRule as any).validate === 'function') {
      (this.defaultRule as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

