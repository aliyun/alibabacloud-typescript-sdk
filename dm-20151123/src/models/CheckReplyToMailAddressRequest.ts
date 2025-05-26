// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckReplyToMailAddressRequest extends $dara.Model {
  /**
   * @remarks
   * Language.
   * 
   * en is English, and any other value or an empty value defaults to Chinese.
   * 
   * @example
   * 无
   */
  lang?: string;
  /**
   * @remarks
   * Sender Address ID
   * 
   * This parameter is required.
   * 
   * @example
   * 126545
   */
  mailAddressId?: number;
  ownerId?: number;
  /**
   * @remarks
   * Region
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      mailAddressId: 'MailAddressId',
      ownerId: 'OwnerId',
      region: 'Region',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      mailAddressId: 'number',
      ownerId: 'number',
      region: 'string',
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

