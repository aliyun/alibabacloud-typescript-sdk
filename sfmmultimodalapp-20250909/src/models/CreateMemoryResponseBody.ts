// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryResponseBodyDataMemoryNodes extends $dara.Model {
  content?: string;
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
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreateMemoryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance instance-002\\"`curl h33E1En5.popscan.xaliyun.com` does not exist.
   */
  message?: string;
  /**
   * @example
   * 31033EC0-6968-5610-8328-708B59508E5A
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

