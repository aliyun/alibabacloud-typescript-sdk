// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNacosInstanceRequest extends $dara.Model {
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
   * The name of the Nacos instance.
   * 
   * @example
   * DEFAULT
   */
  clusterName?: string;
  /**
   * @remarks
   * Specifies whether to enable the service for the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to mark the instance as a temporary node.
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
   * The IP address of the Nacos instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.2.xx.xx
   */
  ip?: string;
  /**
   * @remarks
   * The node metadata of the instance.
   * 
   * @example
   * {\\"grayversion\\":\\"1.0\\",\\"preserved.register.source\\":\\"SPRING_CLOUD\\",\\"management.context-path\\":\\"\\"}
   */
  metadata?: string;
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
   * The port number of the Nacos instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 12281
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
  /**
   * @remarks
   * The weight. Valid values: 0 to 10000. The value must be an integer. A larger value indicates a higher frequency at which the instance is accessed.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterName: 'ClusterName',
      enabled: 'Enabled',
      ephemeral: 'Ephemeral',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      metadata: 'Metadata',
      namespaceId: 'NamespaceId',
      port: 'Port',
      serviceName: 'ServiceName',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterName: 'string',
      enabled: 'boolean',
      ephemeral: 'boolean',
      groupName: 'string',
      instanceId: 'string',
      ip: 'string',
      metadata: 'string',
      namespaceId: 'string',
      port: 'number',
      serviceName: 'string',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

