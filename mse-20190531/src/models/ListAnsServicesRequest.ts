// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnsServicesRequest extends $dara.Model {
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
   * 
   * @deprecated
   */
  clusterId?: string;
  /**
   * @remarks
   * 查询服务下某个集群的实例列表是所需要的参数
   */
  clusterName?: string;
  /**
   * @remarks
   * The name of the contact group.
   * 
   * @example
   * name
   */
  groupName?: string;
  /**
   * @remarks
   * Specifies whether to query the number of instances that are used for the service.
   * 
   * @example
   * true
   */
  hasIpCount?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > This operation contains both the InstanceId and ClusterId parameters. You must specify one of them.
   * 
   * @example
   * mse-cn-st21v5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 12233****
   */
  namespaceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The extended request parameters in the JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * name
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      groupName: 'GroupName',
      hasIpCount: 'HasIpCount',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      clusterName: 'string',
      groupName: 'string',
      hasIpCount: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestPars: 'string',
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

