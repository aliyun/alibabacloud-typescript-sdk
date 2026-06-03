// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDypnsSmsVerifyCallBackTestRequest extends $dara.Model {
  /**
   * @example
   * Register
   */
  bizType?: string;
  /**
   * @example
   * {"aa":1,"b":"test"}
   */
  content?: string;
  /**
   * @example
   * POST
   */
  method?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      content: 'Content',
      method: 'Method',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      content: 'string',
      method: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

