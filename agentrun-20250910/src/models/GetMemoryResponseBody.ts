// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryResponseBodyData extends $dara.Model {
  createTime?: number;
  /**
   * @example
   * 365
   */
  longTtl?: number;
  /**
   * @example
   * test-memory
   */
  name?: string;
  /**
   * @example
   * 30
   */
  shortTtl?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      longTtl: 'longTtl',
      name: 'name',
      shortTtl: 'shortTtl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      longTtl: 'number',
      name: 'string',
      shortTtl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: GetMemoryResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5A362ADD-51FC-5F4A-B858-D77F6EFAE2E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMemoryResponseBodyData,
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

