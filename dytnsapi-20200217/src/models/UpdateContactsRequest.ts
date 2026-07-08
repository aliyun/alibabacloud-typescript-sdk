// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactsRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * XXXX@alibaba-inc.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * The ID of the contact to update. You can retrieve the ID by calling the ListContacts operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1194432
   */
  contactId?: number;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * XXX
   */
  contactName?: string;
  /**
   * @remarks
   * The mobile phone number of the contact.
   * 
   * @example
   * 192XXXXXXXX
   */
  contactPhone?: string;
  /**
   * @remarks
   * Enables or disables email alerts. Valid values:
   * 
   * - 0: disabled.
   * 
   * - 1: enabled.
   * 
   * @example
   * 1
   */
  mailStatus?: number;
  /**
   * @remarks
   * Enables or disables alerts for number status.
   * Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  openStatusWarning?: boolean;
  /**
   * @remarks
   * Enables or disables alerts for number attribution queries. Valid values: -**true**: enabled. -**false**: disabled.
   * 
   * @example
   * true
   */
  opentAttributionWarning?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * Enables or disables phone call alerts. Valid values:
   * 
   * - 0: disabled.
   * 
   * - 1: enabled.
   * 
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

