// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMemoryListResponseBodyDataMemoryNodes extends $dara.Model {
  content?: string;
  createTime?: number;
  event?: string;
  memoryNodeId?: string;
  metaData?: { [key: string]: any };
  metaDataJson?: string;
  oldContent?: string;
  projectId?: string;
  timestamp?: number;
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
  pageNum?: string;
  pageSize?: string;
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
  code?: string;
  data?: QueryMemoryListResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

