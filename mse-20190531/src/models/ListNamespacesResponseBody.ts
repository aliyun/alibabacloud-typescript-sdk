// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespacesResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * 3
   */
  appCount?: number;
  /**
   * @example
   * 2024-09-02T09:49:48.000+0000
   */
  createTime?: number;
  describe?: string;
  /**
   * @example
   * 6
   */
  instanceCount?: number;
  /**
   * @example
   * myNamespace
   */
  namespace?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  tags?: { [key: string]: any };
  /**
   * @example
   * 2024-09-02T09:49:48.000+0000
   */
  updateTime?: number;
  /**
   * @example
   * 178*******
   */
  userId?: string;
  /**
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
   * @example
   * 3
   */
  appCount?: number;
  /**
   * @example
   * 2024-09-02T09:49:48.000+0000
   */
  createTime?: number;
  describe?: string;
  /**
   * @example
   * 6
   */
  instanceCount?: number;
  /**
   * @example
   * myNamespace
   */
  namespace?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 2024-09-02T09:49:48.000+0000
   */
  updateTime?: number;
  /**
   * @example
   * 178*******
   */
  userId?: string;
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  result?: ListNamespacesResponseBodyDataResult[];
  results?: ListNamespacesResponseBodyDataResults[];
  /**
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
  data?: ListNamespacesResponseBodyData;
  /**
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

