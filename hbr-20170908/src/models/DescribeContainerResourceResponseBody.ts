// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerResourceResponseBodyResources extends $dara.Model {
  /**
   * @example
   * cc-0005**********hhjw
   */
  clusterId?: string;
  /**
   * @example
   * c21b653f********695e892e718c419a4
   */
  clusterIdentifier?: string;
  /**
   * @example
   * a9ab843d-****-****-8e46-1d67a82128a7
   */
  resourceId?: string;
  /**
   * @example
   * {"pv_name":"nas-a9ab843d-****-****-8e46-1d67a82128a7","pv_size":"1000Gi","storage_class":"opk8s-nas","pvc_name":"**-pvc","namespace":"default"}
   */
  resourceInfo?: string;
  /**
   * @example
   * PV
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterIdentifier: 'ClusterIdentifier',
      resourceId: 'ResourceId',
      resourceInfo: 'ResourceInfo',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterIdentifier: 'string',
      resourceId: 'string',
      resourceInfo: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * D98A2895-745B-5530-A8C1-9A86F0A82354
   */
  requestId?: string;
  resources?: DescribeContainerResourceResponseBodyResources[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeContainerResourceResponseBodyResources },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

