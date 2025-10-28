// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbortChangeOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process. You can call the [GetChangeOrderInfo](https://help.aliyun.com/document_detail/62072.html) operation to query the change process ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4f038ddf-b27b-****-****-88e44375****
   */
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

