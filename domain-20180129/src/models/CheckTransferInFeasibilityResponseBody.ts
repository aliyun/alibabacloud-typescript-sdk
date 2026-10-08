// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTransferInFeasibilityResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the domain name can be transferred in. Valid values:
   * - **true**: The domain name can be transferred in.
   * - **false**: The domain name cannot be transferred in.
   * 
   * @example
   * false
   */
  canTransfer?: boolean;
  /**
   * @remarks
   * The error code returned when the domain name cannot be transferred in.
   * 
   * @example
   * CheckTransferResult.DomainTransferProhibited
   */
  code?: string;
  /**
   * @remarks
   * The error description returned when the domain name cannot be transferred in.
   * 
   * @example
   * This domain name is in transfer prohibited status, so it cannot be transferred. You can contact your original registrar to change its status.
   */
  message?: string;
  /**
   * @remarks
   * The product ID of the domain name.
   * 
   * @example
   * 2a
   */
  productId?: string;
  /**
   * @remarks
   * The unique request access token.
   * 
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

