// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceListenersRequest extends $dara.Model {
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
   * The ID of the MSE instance to which the service belongs.
   * 
   * >  You must specify InstanceId or ClusterId.
   * 
   * @example
   * mse-09k1q11****
   * 
   * @deprecated
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster to which the service belongs.
   * 
   * > The cluster is a concept for Nacos services and is not equivalent to a Microservices Engine (MSE) instance.
   * 
   * @example
   * DEFAULT
   */
  clusterName?: string;
  /**
   * @remarks
   * The group to which the service belongs.
   * 
   * @example
   * WEB_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * none
   */
  hasIpCount?: string;
  /**
   * @remarks
   * The ID of the instance to which the service belongs.
   * 
   * > You must specify InstanceId or ClusterId.
   * 
   * @example
   * mse_prepaid_public_cn-tl32odtt20j
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace to which the service belongs.
   * 
   * @example
   * ddaf8f12-****-b1c1-86e7c72e266b
   */
  namespaceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
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
   * The name of the service whose listeners you want to query.
   * 
   * @example
   * zeekr-orderboss
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

