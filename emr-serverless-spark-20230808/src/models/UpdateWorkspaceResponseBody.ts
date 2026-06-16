// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 1005565802416783361
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateWorkspaceResponseBodyData;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 979071171373334529
   */
  orderId?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      orderId: 'orderId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateWorkspaceResponseBodyData,
      orderId: 'string',
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

