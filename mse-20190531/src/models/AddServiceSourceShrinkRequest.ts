// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddServiceSourceShrinkRequest extends $dara.Model {
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
  groupListShrink?: string;
  /**
   * @remarks
   * The Ingress configurations. This parameter is used when the service source type is K8s.
   */
  ingressOptionsRequestShrink?: string;
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
  pathListShrink?: string;
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
  toAuthorizeSecurityGroupsShrink?: string;
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

