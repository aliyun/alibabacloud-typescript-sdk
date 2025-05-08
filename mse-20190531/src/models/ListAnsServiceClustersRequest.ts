// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnsServiceClustersRequest extends $dara.Model {
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
   * The ID of the MSE cluster.
   * 
   * >  The MSE cluster is different from the cluster of the Nacos service.
   * 
   * @example
   * mse-09k1q110q01
   * 
   * @deprecated
   */
  clusterId?: string;
  /**
   * @remarks
   * The alias of the cluster.
   * 
   * @example
   * mse-7413****
   */
  clusterName?: string;
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
   * @example
   * mse_prepaid_public_cn-tl32a6****
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
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * nacos.test.3
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      clusterName: 'string',
      groupName: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
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

