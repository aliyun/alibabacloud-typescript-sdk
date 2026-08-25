// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerResourceResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-0005**********hhjw
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster identifier.
   * 
   * @example
   * c21b653f********695e892e718c419a4
   */
  clusterIdentifier?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * a9ab843d-****-****-8e46-1d67a82128a7
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource details.
   * 
   * @example
   * {"pv_name":"nas-a9ab843d-****-****-8e46-1d67a82128a7","pv_size":"1000Gi","storage_class":"opk8s-nas","pvc_name":"**-pvc","namespace":"default"}
   */
  resourceInfo?: string;
  /**
   * @remarks
   * The resource type.
   * 
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
   * @remarks
   * The return code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message. Returns "successful" on success or an error message on failure.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D98A2895-745B-5530-A8C1-9A86F0A82354
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
   */
  resources?: DescribeContainerResourceResponseBodyResources[];
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * - true: succeeded
   * 
   * - false: failed
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
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

