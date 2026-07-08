// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContactsRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. Set the value to **contact**.
   * 
   * @example
   * dytns
   */
  bizType?: string;
  /**
   * @remarks
   * The contact email.
   * 
   * @example
   * 1234@alibaba-inc.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * The contact name.
   * 
   * This parameter is required.
   * 
   * @example
   * 张光宇
   */
  contactName?: string;
  /**
   * @remarks
   * The contact phone number.
   * 
   * @example
   * 122354532434
   */
  contactPhone?: string;
  /**
   * @remarks
   * Specifies whether to enable email alerts. Valid values:
   * 
   * @example
   * 0
   */
  mailStatus?: number;
  /**
   * @remarks
   * Specifies whether to enable status warnings. Valid values:
   * 
   * @example
   * false
   */
  openStatusWarning?: boolean;
  /**
   * @remarks
   * Specifies whether to enable attribution warnings. Valid values:
   * 
   * @example
   * true
   */
  opentAttributionWarning?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to enable phone alerts. Valid values:
   * 
   * @example
   * 0
   */
  phoneStatus?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      contactEmail: 'ContactEmail',
      contactName: 'ContactName',
      contactPhone: 'ContactPhone',
      mailStatus: 'MailStatus',
      openStatusWarning: 'OpenStatusWarning',
      opentAttributionWarning: 'OpentAttributionWarning',
      ownerId: 'OwnerId',
      phoneStatus: 'PhoneStatus',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      contactEmail: 'string',
      contactName: 'string',
      contactPhone: 'string',
      mailStatus: 'number',
      openStatusWarning: 'boolean',
      opentAttributionWarning: 'boolean',
      ownerId: 'number',
      phoneStatus: 'number',
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

