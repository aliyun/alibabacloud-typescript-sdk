// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AISearchResourceGetListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  items?: any[];
  /**
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @example
   * 68
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      items: 'items',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      items: { 'type': 'array', 'itemType': 'any' },
      pageSize: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AISearchResourceGetListResponseBody extends $dara.Model {
  data?: AISearchResourceGetListResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A8AEC6D9-A359-5169-BD1A-BD848BA60D65
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AISearchResourceGetListResponseBodyData,
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

