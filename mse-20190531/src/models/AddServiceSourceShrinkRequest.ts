// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddServiceSourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN (default): Chinese
   * *   en-US: English
   * *   ja: Japanese
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to monitor Ingress classes.
   * 
   * @example
   * c9ad2a0717032427e920754e25b49e3b5
   */
  address?: string;
  /**
   * @remarks
   * Specifies whether to update the Ingress status.
   * 
   * @example
   * gw-c70622ff52fe49beb29bea9a6f52****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The data structure.
   */
  groupListShrink?: string;
  /**
   * @remarks
   * The list of service groups.
   */
  ingressOptionsRequestShrink?: string;
  /**
   * @remarks
   * The namespace whose resources you want to monitor.
   * 
   * @example
   * istio
   */
  name?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   */
  pathListShrink?: string;
  /**
   * @remarks
   * The service source.
   * 
   * *   K8s: ACK cluster
   * *   NACOS: MSE Nacos instance
   * 
   * @example
   * K8s,MSE
   */
  source?: string;
  /**
   * @remarks
   * The list of security groups to be authorized. You can specify security groups to allow backend services to access data sources that you create.
   */
  toAuthorizeSecurityGroupsShrink?: string;
  /**
   * @remarks
   * The type of the service source.
   * 
   * *   K8s: Container Service for Kubernetes (ACK) cluster
   * *   NACOS: Nacos instance
   * 
   * @example
   * The Ingress configuration.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      address: 'Address',
      gatewayUniqueId: 'GatewayUniqueId',
      groupListShrink: 'GroupList',
      ingressOptionsRequestShrink: 'IngressOptionsRequest',
      name: 'Name',
      pathListShrink: 'PathList',
      source: 'Source',
      toAuthorizeSecurityGroupsShrink: 'ToAuthorizeSecurityGroups',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      gatewayUniqueId: 'string',
      groupListShrink: 'string',
      ingressOptionsRequestShrink: 'string',
      name: 'string',
      pathListShrink: 'string',
      source: 'string',
      toAuthorizeSecurityGroupsShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

