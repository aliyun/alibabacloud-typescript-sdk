// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNacosInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The alias of the cluster.
   * 
   * @example
   * DEFAULT
   */
  clusterName?: string;
  /**
   * @remarks
   * Specifies whether the node is an ephemeral node. Valid values:
   * 
   * *   `true`: yes
   * *   `false`: no
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  ephemeral?: boolean;
  /**
   * @remarks
   * The name of the group.
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the Nacos instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse-cn-st21v5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the Nacos instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.237.1.32
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 9e78a671-4b9b-4dd4-99c1-0b9da87****
   */
  namespaceId?: string;
  /**
   * @remarks
   * The port of the Nacos instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The name of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * hello_service
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterName: 'ClusterName',
      ephemeral: 'Ephemeral',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      namespaceId: 'NamespaceId',
      port: 'Port',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterName: 'string',
      ephemeral: 'boolean',
      groupName: 'string',
      instanceId: 'string',
      ip: 'string',
      namespaceId: 'string',
      port: 'number',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

