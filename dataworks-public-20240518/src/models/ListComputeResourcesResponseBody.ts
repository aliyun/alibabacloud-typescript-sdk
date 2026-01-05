// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeResourcesResponseBodyPagingInfoComputeResourcesComputeResource extends $dara.Model {
  /**
   * @remarks
   * The category of the added compute resource. Different types have different subtypes with corresponding parameter constraints. Examples: InstanceMode: The instance mode. UrlMode: The connection string mode.
   * 
   * @example
   * {\\n    \\"clusterIdentifier\\": \\"c-da123456\\",\\n    \\"database\\": \\"testdb\\",\\n    \\"loginMode\\":\\"Anonymous\\",\\n    \\"defaultFS\\":\\"127.0.0.1\\",\\n    \\"envType\\": \\"Prod\\"\\n}
   */
  connectionProperties?: any;
  /**
   * @remarks
   * The specific connection configuration details for the computing resource, including the connection address, access identity, and environment information. envType, which specifies the computing resource environment, is a property of this object. Valid values:
   * 
   * *   Dev
   * *   Prod Different types of computing resources have different attribute specifications under different configuration modes (ConnectionPropertiesMode).
   * 
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @remarks
   * The creation time (timestamp).
   * 
   * @example
   * 1624387842781448
   */
  createTime?: number;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 1648711113000
   */
  createUser?: string;
  /**
   * @remarks
   * The unique identifier of the computing resource.
   * 
   * @example
   * home_feed
   */
  description?: string;
  /**
   * @remarks
   * The computing resource ID, which is the unique identifier for the resource.
   * 
   * @example
   * 8649832502405358603
   */
  id?: number;
  /**
   * @remarks
   * The last modified time of the computing resource (timestamp).
   * 
   * @example
   * 1624387842781448
   */
  modifyTime?: number;
  /**
   * @remarks
   * The modifier ID.
   * 
   * @example
   * 1648711113000
   */
  modifyUser?: string;
  /**
   * @remarks
   * Specifies whether it is the default compute resource.
   * 
   * @example
   * true
   */
  whetherDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      whetherDefault: 'WhetherDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'any',
      connectionPropertiesMode: 'string',
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      whetherDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeResourcesResponseBodyPagingInfoComputeResources extends $dara.Model {
  /**
   * @remarks
   * Details of a single computing resource.
   */
  computeResource?: ListComputeResourcesResponseBodyPagingInfoComputeResourcesComputeResource[];
  /**
   * @remarks
   * The name of the computing resource.
   * 
   * @example
   * cal_all_vemg_workflow_parallel
   */
  name?: string;
  /**
   * @remarks
   * The type of the computing resource.
   * 
   * @example
   * hologres
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: { 'type': 'array', 'itemType': ListComputeResourcesResponseBodyPagingInfoComputeResourcesComputeResource },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.computeResource)) {
      $dara.Model.validateArray(this.computeResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeResourcesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of computing resources. Each element is a computing resource group that contains information about the development environment (if any) and the production environment.
   */
  computeResources?: ListComputeResourcesResponseBodyPagingInfoComputeResources[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      computeResources: 'ComputeResources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResources: { 'type': 'array', 'itemType': ListComputeResourcesResponseBodyPagingInfoComputeResources },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.computeResources)) {
      $dara.Model.validateArray(this.computeResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Pagination information.
   */
  pagingInfo?: ListComputeResourcesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. Used to locate logs and troubleshoot issues.
   * 
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListComputeResourcesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

