// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RequestWhatsappConversionApiShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID or instance ID of the customer.
   * 
   * This parameter is required.
   * 
   * @example
   * 929399382
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The PageId of Meta.
   * 
   * This parameter is required.
   * 
   * @example
   * 1939848838
   */
  pageId?: string;
  /**
   * @remarks
   * The request data.
   */
  requestDataShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      pageId: 'PageId',
      requestDataShrink: 'RequestData',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      ownerId: 'number',
      pageId: 'string',
      requestDataShrink: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

