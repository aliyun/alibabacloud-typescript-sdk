// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryResponseBodyData extends $dara.Model {
  /**
   * @example
   * my-cms-workspace
   */
  cmsWorkspaceName?: string;
  /**
   * @example
   * 1735870116
   */
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
  strategy?: string[];
  static names(): { [key: string]: string } {
    return {
      cmsWorkspaceName: 'cmsWorkspaceName',
      createTime: 'createTime',
      longTtl: 'longTtl',
      name: 'name',
      shortTtl: 'shortTtl',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsWorkspaceName: 'string',
      createTime: 'number',
      longTtl: 'number',
      name: 'string',
      shortTtl: 'number',
      strategy: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.strategy)) {
      $dara.Model.validateArray(this.strategy);
    }
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

