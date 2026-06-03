// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTransferInFeasibilityResponseBody extends $dara.Model {
  canTransfer?: boolean;
  code?: string;
  message?: string;
  productId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      canTransfer: 'CanTransfer',
      code: 'Code',
      message: 'Message',
      productId: 'ProductId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canTransfer: 'boolean',
      code: 'string',
      message: 'string',
      productId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

