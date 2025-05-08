// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNacosClusterRequest extends $dara.Model {
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
   * The port used for health checks.
   * 
   * @example
   * 80
   */
  checkPort?: number;
  /**
   * @remarks
   * The name of the Nacos cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT
   */
  clusterName?: string;
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
   * The type of the health check.
   * 
   * @example
   * {"type":"none"}
   */
  healthChecker?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse-cn-123456
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 9e78a671-4b9b-4dd4-99c1-0b9da87d3dec
   */
  namespaceId?: string;
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
  /**
   * @remarks
   * Specifies whether to use the port of the instance for a health check.
   * 
   * @example
   * false
   */
  useInstancePortForCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      checkPort: 'CheckPort',
      clusterName: 'ClusterName',
      groupName: 'GroupName',
      healthChecker: 'HealthChecker',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      serviceName: 'ServiceName',
      useInstancePortForCheck: 'UseInstancePortForCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      checkPort: 'number',
      clusterName: 'string',
      groupName: 'string',
      healthChecker: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      serviceName: 'string',
      useInstancePortForCheck: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

