// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddServiceSourceRequestIngressOptionsRequest } from "./AddServiceSourceRequestIngressOptionsRequest";
import { AddServiceSourceRequestToAuthorizeSecurityGroups } from "./AddServiceSourceRequestToAuthorizeSecurityGroups";


export class AddServiceSourceRequest extends $dara.Model {
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
  groupList?: string[];
  /**
   * @remarks
   * The list of service groups.
   */
  ingressOptionsRequest?: AddServiceSourceRequestIngressOptionsRequest;
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
  pathList?: string[];
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
  toAuthorizeSecurityGroups?: AddServiceSourceRequestToAuthorizeSecurityGroups[];
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
      groupList: 'GroupList',
      ingressOptionsRequest: 'IngressOptionsRequest',
      name: 'Name',
      pathList: 'PathList',
      source: 'Source',
      toAuthorizeSecurityGroups: 'ToAuthorizeSecurityGroups',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      gatewayUniqueId: 'string',
      groupList: { 'type': 'array', 'itemType': 'string' },
      ingressOptionsRequest: AddServiceSourceRequestIngressOptionsRequest,
      name: 'string',
      pathList: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      toAuthorizeSecurityGroups: { 'type': 'array', 'itemType': AddServiceSourceRequestToAuthorizeSecurityGroups },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    if(this.ingressOptionsRequest && typeof (this.ingressOptionsRequest as any).validate === 'function') {
      (this.ingressOptionsRequest as any).validate();
    }
    if(Array.isArray(this.pathList)) {
      $dara.Model.validateArray(this.pathList);
    }
    if(Array.isArray(this.toAuthorizeSecurityGroups)) {
      $dara.Model.validateArray(this.toAuthorizeSecurityGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

