// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContactsRequest extends $dara.Model {
  /**
   * @example
   * dytns
   */
  bizType?: string;
  /**
   * @example
   * 1234@alibaba-inc.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactName?: string;
  /**
   * @example
   * 122354532434
   */
  contactPhone?: string;
  /**
   * @example
   * 0
   */
  mailStatus?: number;
  /**
   * @example
   * false
   */
  openStatusWarning?: boolean;
  /**
   * @example
   * true
   */
  opentAttributionWarning?: boolean;
  ownerId?: number;
  /**
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

