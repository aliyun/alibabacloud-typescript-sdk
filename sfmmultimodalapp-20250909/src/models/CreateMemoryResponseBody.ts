// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryResponseBodyDataMemoryNodes extends $dara.Model {
  content?: string;
  event?: string;
  memoryNodeId?: string;
  oldContent?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      event: 'Event',
      memoryNodeId: 'MemoryNodeId',
      oldContent: 'OldContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      event: 'string',
      memoryNodeId: 'string',
      oldContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemoryResponseBodyData extends $dara.Model {
  memoryNodes?: CreateMemoryResponseBodyDataMemoryNodes[];
  static names(): { [key: string]: string } {
    return {
      memoryNodes: 'MemoryNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryNodes: { 'type': 'array', 'itemType': CreateMemoryResponseBodyDataMemoryNodes },
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

export class CreateMemoryResponseBody extends $dara.Model {
  code?: string;
  data?: CreateMemoryResponseBodyData;
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
      data: CreateMemoryResponseBodyData,
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

