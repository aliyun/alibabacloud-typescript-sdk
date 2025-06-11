// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SendChatappMassMessageRequestSenderListFlowAction } from "./SendChatappMassMessageRequestSenderListFlowAction";
import { SendChatappMassMessageRequestSenderListProductAction } from "./SendChatappMassMessageRequestSenderListProductAction";


export class SendChatappMassMessageRequestSenderList extends $dara.Model {
  /**
   * @remarks
   * The Flow action.
   */
  flowAction?: SendChatappMassMessageRequestSenderListFlowAction;
  /**
   * @remarks
   * The payload of the button.
   */
  payload?: string[];
  /**
   * @remarks
   * The information about the product.
   */
  productAction?: SendChatappMassMessageRequestSenderListProductAction;
  /**
   * @remarks
   * The parameters of the template.
   */
  templateParams?: { [key: string]: string };
  /**
   * @remarks
   * The mobile phone number of the message receiver.
   * 
   * This parameter is required.
   * 
   * @example
   * 861388988****
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      flowAction: 'FlowAction',
      payload: 'Payload',
      productAction: 'ProductAction',
      templateParams: 'TemplateParams',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowAction: SendChatappMassMessageRequestSenderListFlowAction,
      payload: { 'type': 'array', 'itemType': 'string' },
      productAction: SendChatappMassMessageRequestSenderListProductAction,
      templateParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      to: 'string',
    };
  }

  validate() {
    if(this.flowAction && typeof (this.flowAction as any).validate === 'function') {
      (this.flowAction as any).validate();
    }
    if(Array.isArray(this.payload)) {
      $dara.Model.validateArray(this.payload);
    }
    if(this.productAction && typeof (this.productAction as any).validate === 'function') {
      (this.productAction as any).validate();
    }
    if(this.templateParams) {
      $dara.Model.validateMap(this.templateParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

