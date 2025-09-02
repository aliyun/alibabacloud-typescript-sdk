// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionApplyOrderDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the permission request order. You can call the [ListPermissionApplyOrders](https://help.aliyun.com/document_detail/211008.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 48f36729-05f9-4a40-9286-933fd940f30a
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

