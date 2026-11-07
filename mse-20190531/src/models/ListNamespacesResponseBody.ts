// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespacesResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * Number of applications.
   * 
   * @example
   * 3
   */
  appCount?: number;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2024-09-02T09:49:48.000+0000
   */
  createTime?: number;
  /**
   * @remarks
   * Namespace description.
   * 
   * @example
   * namespace 1 for testing
   */
  describe?: string;
  /**
   * @remarks
   * Number of online nodes.
   * 
   * @example
   * 6
   */
  instanceCount?: number;
  /**
   * @remarks
   * Namespace.
   * 
   * @example
   * myNamespace
   */
  namespace?: string;
  /**
   * @remarks
   * Region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Alibaba Cloud tags.
   * 
   * @example
   * {"1":"1","2":"2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 2024-09-02T09:49:48.000+0000
   */
  updateTime?: number;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 178*******
   */
  userId?: string;
  /**
   * @remarks
   * Version. Basic Edition 0, Professional Edition 1, Enterprise Edition 2.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      appCount: 'AppCount',
      createTime: 'CreateTime',
      describe: 'Describe',
      instanceCount: 'InstanceCount',
      namespace: 'Namespace',
      region: 'Region',
      tags: 'Tags',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCount: 'number',
      createTime: 'number',
      describe: 'string',
      instanceCount: 'number',
      namespace: 'string',
      region: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateTime: 'number',
      userId: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * Number of applications.
   * 
   * @example
   * 3
   */
  appCount?: number;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2024-09-02T09:49:48.000+0000
   */
  createTime?: number;
  /**
   * @remarks
   * Namespace description.
   * 
   * @example
   * namespace 1 for testing
   */
  describe?: string;
  /**
   * @remarks
   * Number of online nodes.
   * 
   * @example
   * 6
   */
  instanceCount?: number;
  /**
   * @remarks
   * Namespace.
   * 
   * @example
   * myNamespace
   */
  namespace?: string;
  /**
   * @remarks
   * Region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 2024-09-02T09:49:48.000+0000
   */
  updateTime?: number;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 178*******
   */
  userId?: string;
  /**
   * @remarks
   * Version. Basic Edition 0, Professional Edition 1, Enterprise Edition 2.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      appCount: 'AppCount',
      createTime: 'CreateTime',
      describe: 'Describe',
      instanceCount: 'InstanceCount',
      namespace: 'Namespace',
      region: 'Region',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCount: 'number',
      createTime: 'number',
      describe: 'string',
      instanceCount: 'number',
      namespace: 'string',
      region: 'string',
      updateTime: 'number',
      userId: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Result page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size for the query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Return results.
   */
  result?: ListNamespacesResponseBodyDataResult[];
  /**
   * @remarks
   * Result set.
   */
  results?: ListNamespacesResponseBodyDataResults[];
  /**
   * @remarks
   * Total number of query results.
   * 
   * @example
   * 7
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      results: 'Results',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListNamespacesResponseBodyDataResult },
      results: { 'type': 'array', 'itemType': ListNamespacesResponseBodyDataResults },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return results.
   */
  data?: ListNamespacesResponseBodyData;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D1F1A6F3-7E03-5EAD-B3F1-123456789ABC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListNamespacesResponseBodyData,
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

