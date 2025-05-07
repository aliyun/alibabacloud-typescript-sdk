// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIngressesResponseBodyDataIngressListCorsConfig } from "./ListIngressesResponseBodyDataIngressListCorsConfig";
import { ListIngressesResponseBodyDataIngressListDefaultRule } from "./ListIngressesResponseBodyDataIngressListDefaultRule";
import { ListIngressesResponseBodyDataIngressListRules } from "./ListIngressesResponseBodyDataIngressListRules";


export class ListIngressesResponseBodyDataIngressList extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate that is associated with a Classic Load Balancer (**CLB**) instance.
   * 
   * @example
   * 13624*****73809_16f8e549a20_1175189789_12****3210
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
  corsConfig?: ListIngressesResponseBodyDataIngressListCorsConfig;
  createTime?: number;
  defaultRule?: ListIngressesResponseBodyDataIngressListDefaultRule;
  /**
   * @remarks
   * The name of a routing rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of a routing rule.
   * 
   * @example
   * 18
   */
  id?: number;
  idleTimeout?: number;
  /**
   * @remarks
   * The listener ports for an SLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: string;
  /**
   * @remarks
   * The protocol that is supported by SLB to forward requests. Valid values:
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
   * The ID of an MSE cloud-native gateway.
   * 
   * @example
   * gw-d5df01a1bae748f1a7c4e325d2fd****
   */
  mseGatewayId?: string;
  /**
   * @remarks
   * The port of a service.
   * 
   * @example
   * 80
   */
  mseGatewayPort?: string;
  /**
   * @remarks
   * The protocol that is supported by an MSE cloud-native gateway to forward requests. Valid values:
   * 
   * *   **HTTP**: HTTP is suitable for applications that need to identify transmitted data.
   * *   **HTTPS**: HTTPS is suitable for applications that require encrypted data transmission.
   * 
   * @example
   * HTTP
   */
  mseGatewayProtocol?: string;
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
   * cn-shanghai
   */
  namespaceId?: string;
  requestTimeout?: number;
  rules?: ListIngressesResponseBodyDataIngressListRules[];
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
   * The type of SLB instances. Valid values:
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
      createTime: 'CreateTime',
      defaultRule: 'DefaultRule',
      description: 'Description',
      id: 'Id',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalanceType: 'LoadBalanceType',
      mseGatewayId: 'MseGatewayId',
      mseGatewayPort: 'MseGatewayPort',
      mseGatewayProtocol: 'MseGatewayProtocol',
      name: 'Name',
      namespaceId: 'NamespaceId',
      requestTimeout: 'RequestTimeout',
      rules: 'Rules',
      slbId: 'SlbId',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certIds: 'string',
      corsConfig: ListIngressesResponseBodyDataIngressListCorsConfig,
      createTime: 'number',
      defaultRule: ListIngressesResponseBodyDataIngressListDefaultRule,
      description: 'string',
      id: 'number',
      idleTimeout: 'number',
      listenerPort: 'string',
      listenerProtocol: 'string',
      loadBalanceType: 'string',
      mseGatewayId: 'string',
      mseGatewayPort: 'string',
      mseGatewayProtocol: 'string',
      name: 'string',
      namespaceId: 'string',
      requestTimeout: 'number',
      rules: { 'type': 'array', 'itemType': ListIngressesResponseBodyDataIngressListRules },
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

