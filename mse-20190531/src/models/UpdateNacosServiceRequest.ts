// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNacosServiceRequest extends $dara.Model {
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
   * mse-09k1q11****
   */
  clusterId?: string;
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
   * 5e3ee449-b5c0-4aee-b857-32c0acbebf26
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
   * com.dingtalk.doc.thumbnails.pdf.ThumbnailService
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
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

