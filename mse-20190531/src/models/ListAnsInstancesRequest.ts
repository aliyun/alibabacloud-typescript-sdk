// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnsInstancesRequest extends $dara.Model {
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
   * The ID of the Nacos instance.
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
   * The alias of the Nacos instance.
   * 
   * @example
   * mse-7413****
   */
  clusterName?: string;
  /**
   * @remarks
   * The name of the contact group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > This operation contains both the InstanceId and ClusterId parameters. You must specify one of them.
   * 
   * @example
   * mse_prepaid_public_cn-tl327w****
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
   * This parameter is required.
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
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
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
      instanceId: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
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

