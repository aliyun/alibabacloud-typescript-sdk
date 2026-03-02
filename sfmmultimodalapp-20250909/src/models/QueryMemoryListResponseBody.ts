// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMemoryListResponseBodyDataMemoryNodes extends $dara.Model {
  /**
   * @example
   * []
   */
  content?: string;
  /**
   * @example
   * 1743991502383
   */
  createTime?: number;
  /**
   * @example
   * ADD
   */
  event?: string;
  /**
   * @example
   * 384dc4786b9d4f5a8cab0d83112cd5a8
   */
  memoryNodeId?: string;
  metaData?: { [key: string]: any };
  /**
   * @example
   * []
   */
  metaDataJson?: string;
  /**
   * @example
   * []
   */
  oldContent?: string;
  /**
   * @example
   * profile_project
   */
  projectId?: string;
  /**
   * @example
   * 1743991502383
   */
  timestamp?: number;
  /**
   * @example
   * 1743991502383
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      event: 'Event',
      memoryNodeId: 'MemoryNodeId',
      metaData: 'MetaData',
      metaDataJson: 'MetaDataJson',
      oldContent: 'OldContent',
      projectId: 'ProjectId',
      timestamp: 'Timestamp',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'number',
      event: 'string',
      memoryNodeId: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metaDataJson: 'string',
      oldContent: 'string',
      projectId: 'string',
      timestamp: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMemoryListResponseBodyData extends $dara.Model {
  memoryNodes?: QueryMemoryListResponseBodyDataMemoryNodes[];
  /**
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 60
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      memoryNodes: 'MemoryNodes',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryNodes: { 'type': 'array', 'itemType': QueryMemoryListResponseBodyDataMemoryNodes },
      pageNum: 'string',
      pageSize: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memoryNodes)) {
      $dara.Model.validateArray(this.memoryNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMemoryListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QueryMemoryListResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * A42FFCBD-33A9-54AA-9351-86E3C3B316A7
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryMemoryListResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

