// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddServiceSourceRequestIngressOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The group to which the service belongs.
   * 
   * @example
   * true
   */
  enableIngress?: boolean;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese. This is the default value.
   * *   en-US: English.
   * *   ja: Japanese.
   * 
   * @example
   * true
   */
  enableStatus?: boolean;
  /**
   * @remarks
   * An array of service root paths.
   * 
   * @example
   * com.test.xxx
   */
  ingressClass?: string;
  /**
   * @remarks
   * The root path of the service.
   * 
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      enableIngress: 'EnableIngress',
      enableStatus: 'EnableStatus',
      ingressClass: 'IngressClass',
      watchNamespace: 'WatchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIngress: 'boolean',
      enableStatus: 'boolean',
      ingressClass: 'string',
      watchNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSourceRequestToAuthorizeSecurityGroups extends $dara.Model {
  /**
   * @remarks
   * The description of the authorization record.
   * 
   * @example
   * rule for xxx
   */
  description?: string;
  /**
   * @remarks
   * The authorized port range of the security group. You can select multiple port ranges. Separate each port range with a comma (,).
   * 
   * @example
   * 8080/8080,9000/10000
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1acepclex0vmi1****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      portRange: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

