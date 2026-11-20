// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWuyingServerSpecResponseBodyModifyWuyingServerSpecModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the order generated for this specification change. Returning an order ID does not indicate that the specification change is complete.
   * 
   * @example
   * 23429322113****
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
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

export class ModifyWuyingServerSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The processing result of the specification change.
   */
  modifyWuyingServerSpecModel?: ModifyWuyingServerSpecResponseBodyModifyWuyingServerSpecModel;
  /**
   * @remarks
   * The ID of the request, which is used for troubleshooting.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyWuyingServerSpecModel: 'ModifyWuyingServerSpecModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyWuyingServerSpecModel: ModifyWuyingServerSpecResponseBodyModifyWuyingServerSpecModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.modifyWuyingServerSpecModel && typeof (this.modifyWuyingServerSpecModel as any).validate === 'function') {
      (this.modifyWuyingServerSpecModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

