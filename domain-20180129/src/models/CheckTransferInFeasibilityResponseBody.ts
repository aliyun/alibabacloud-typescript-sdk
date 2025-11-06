// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTransferInFeasibilityResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  canTransfer?: boolean;
  /**
   * @example
   * CheckTransferResult.DomainTransferProhibited
   */
  code?: string;
  /**
   * @example
   * This domain name is in transfer prohibited status, so it cannot be transferred. You can contact your original registrar to change its status.
   */
  message?: string;
  /**
   * @example
   * 2a
   */
  productId?: string;
  /**
   * @example
   * FC0D6B89-2353-4D64-BD80-6606A7DBD7C1
   */
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

