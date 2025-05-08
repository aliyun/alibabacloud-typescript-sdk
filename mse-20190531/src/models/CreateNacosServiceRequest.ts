// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNacosServiceRequest extends $dara.Model {
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
   * The ID of the cluster.
   * 
   * > This operation contains both the InstanceId and ClusterId parameters. You must specify one of them.
   * 
   * @example
   * mse-3691a080
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether the instance is marked as a temporary node. Valid values:
   * 
   * *   `true`: yes
   * *   `false`: no
   * 
   * @example
   * true
   */
  ephemeral?: boolean;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > This operation contains both the InstanceId and ClusterId parameters. You must specify one of them.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * production
   */
  namespaceId?: string;
  /**
   * @remarks
   * The protection threshold.
   * 
   * @example
   * 0
   */
  protectThreshold?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * com.alibabacloud.hipstershop.cartserviceapi.service.CartService
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      ephemeral: 'Ephemeral',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      protectThreshold: 'ProtectThreshold',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      ephemeral: 'boolean',
      groupName: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      protectThreshold: 'string',
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

