// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddServiceSourceRequestIngressOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Ingress.
   * 
   * @example
   * true
   */
  enableIngress?: boolean;
  /**
   * @remarks
   * Specifies whether to update the Ingress status.
   * 
   * @example
   * true
   */
  enableStatus?: boolean;
  /**
   * @remarks
   * The Ingress class to listen on.
   * 
   * @example
   * com.test.xxx
   */
  ingressClass?: string;
  /**
   * @remarks
   * The target namespace to watch.
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
   * The authorized port range of the security group. You can specify multiple port ranges separated by commas (,).
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
   * The supported languages. Valid values:
   * 
   * - zh-CN: Chinese. This is the default value.
   * - en-US: English.
   * - ja: Japanese.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The access address. This parameter is required.
   * * Container Service: the ID of the Container Service cluster.
   * * MSE Nacos: the internal endpoint of the instance.
   * * MSE ZooKeeper: the internal endpoint of the instance.
   * * SAE registry: the namespace TID.
   * * EDAS registry: the microservice namespace.
   * 
   * @example
   * mse-********-nacos-ans.mse.aliyuncs.com:8848
   */
  address?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-c70622ff52fe49beb29bea9a6f52****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The list of service groups.
   */
  groupList?: string[];
  /**
   * @remarks
   * The Ingress configurations. This parameter is used when the service source type is K8s.
   */
  ingressOptionsRequest?: AddServiceSourceRequestIngressOptionsRequest;
  /**
   * @remarks
   * The name.
   * 
   * 
   * > Descriptions for different source types.
   * - When the type is K8s, the input parameter is the name.
   * - When the type is NACOS, the input parameter is the instance ID.
   * 
   * @example
   * nacos
   */
  name?: string;
  /**
   * @remarks
   * The array of service root paths.
   */
  pathList?: string[];
  /**
   * @remarks
   * The service source type:
   * - Container Service: K8S
   * - MSE Nacos: MSE
   * - MSE ZooKeeper: MSE_ZK
   * - SAE registry: SAE
   * - EDAS registry: EDAS
   * 
   * @example
   * MSE
   */
  source?: string;
  /**
   * @remarks
   * The list of security groups to be authorized. This parameter is used to remove security group restrictions for backend services when creating a source.
   */
  toAuthorizeSecurityGroups?: AddServiceSourceRequestToAuthorizeSecurityGroups[];
  /**
   * @remarks
   * The service registration type. Specify the corresponding value based on the source type:
   * - Container Service: K8S
   * - MSE Nacos: NACOS
   * - MSE ZooKeeper: ZOOKEEPER
   * - SAE registry: NACOS
   * - EDAS registry: NACOS
   * 
   * @example
   * NACOS
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

