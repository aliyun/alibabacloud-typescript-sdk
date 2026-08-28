// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSourcesResponseBodyDataItemsK8sSourceInfo extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c09212180612a42adbed6a940d01d***
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourcesResponseBodyDataItemsNacosSourceInfo extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the Nacos instance.
   * 
   * @example
   * mse-3353***-nacos-ans.mse.aliyuncs.com:8848
   */
  address?: string;
  /**
   * @remarks
   * The registry ID.
   * 
   * @example
   * mse-3353***
   */
  clusterId?: string;
  /**
   * @remarks
   * The Nacos instance ID.
   * 
   * @example
   * mse_prepaid_public_cn-wuf***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      clusterId: 'clusterId',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      clusterId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourcesResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * Association completed
   */
  associationReason?: string;
  /**
   * @example
   * ASSOCIATED
   */
  associationStatus?: string;
  /**
   * @remarks
   * The creation timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The source information when the source type is K8S.
   */
  k8sSourceInfo?: ListSourcesResponseBodyDataItemsK8sSourceInfo;
  /**
   * @remarks
   * The source information when the source type is MSE_NACOS.
   */
  nacosSourceInfo?: ListSourcesResponseBodyDataItemsNacosSourceInfo;
  /**
   * @remarks
   * The source name. If the source type is K8S, the name is the container cluster name. If the source type is MSE_NACOS, the name is the Nacos instance name.
   * 
   * @example
   * itemcenter-dev-cluster
   */
  name?: string;
  /**
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * src-crdddallhtgtria***
   */
  sourceId?: string;
  /**
   * @remarks
   * The update timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      associationReason: 'associationReason',
      associationStatus: 'associationStatus',
      createTimestamp: 'createTimestamp',
      k8sSourceInfo: 'k8sSourceInfo',
      nacosSourceInfo: 'nacosSourceInfo',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
      sourceId: 'sourceId',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationReason: 'string',
      associationStatus: 'string',
      createTimestamp: 'number',
      k8sSourceInfo: ListSourcesResponseBodyDataItemsK8sSourceInfo,
      nacosSourceInfo: ListSourcesResponseBodyDataItemsNacosSourceInfo,
      name: 'string',
      resourceGroupId: 'string',
      sourceId: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.k8sSourceInfo && typeof (this.k8sSourceInfo as any).validate === 'function') {
      (this.k8sSourceInfo as any).validate();
    }
    if(this.nacosSourceInfo && typeof (this.nacosSourceInfo as any).validate === 'function') {
      (this.nacosSourceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of sources.
   */
  items?: ListSourcesResponseBodyDataItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListSourcesResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListSourcesResponseBodyData;
  /**
   * @remarks
   * The response message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FA9BB94-915B-5299-A694-49FCC7F5DD00
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSourcesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

