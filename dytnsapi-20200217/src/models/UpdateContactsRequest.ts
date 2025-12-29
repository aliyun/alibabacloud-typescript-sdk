// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactsRequest extends $dara.Model {
  /**
   * @example
   * XXXX@alibaba-inc.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1194432
   */
  contactId?: number;
  /**
   * @example
   * XXX
   */
  contactName?: string;
  /**
   * @example
   * 192XXXXXXXX
   */
  contactPhone?: string;
  /**
   * @example
   * 1
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
   * 1
   */
  phoneStatus?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      contactEmail: 'ContactEmail',
      contactId: 'ContactId',
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
      contactEmail: 'string',
      contactId: 'number',
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

