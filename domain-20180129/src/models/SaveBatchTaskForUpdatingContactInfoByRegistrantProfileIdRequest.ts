// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdRequest extends $dara.Model {
  /**
   * @remarks
   * The contact type to modify. Valid values:
   * 
   * - **registrant**: The domain name\\"s registrant.
   * 
   * - **admin**: The administrative contact for the domain name.
   * 
   * - **billing**: The billing contact.
   * 
   * - **tech**: The technical contact.
   * 
   * This parameter is required.
   * 
   * @example
   * registrant
   */
  contactType?: string;
  /**
   * @remarks
   * An array of domain names to update.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string[];
  /**
   * @remarks
   * The language of the error message that is returned if the request fails. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the registrant profile. This ID is automatically generated when you create a registrant profile. You can find registrant profile IDs by calling the [QueryRegistrantProfiles](https://help.aliyun.com/document_detail/67701.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * Specifies whether to enable the transfer lock. This parameter is valid only when **ContactType** is set to **registrant**. If enabled, this feature prevents the domain name from being transferred for 60 days after the registrant information is modified.
   * 
   * - **true**: Enables the lock, which prevents the domain name from being transferred out.
   * 
   * - **false**: Disables the lock, which allows the domain name to be transferred out.
   * 
   * Default value: **false**.
   * 
   * @example
   * true
   */
  transferOutProhibited?: boolean;
  /**
   * @remarks
   * The IP address of the client. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      contactType: 'ContactType',
      domainName: 'DomainName',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      transferOutProhibited: 'TransferOutProhibited',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactType: 'string',
      domainName: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      registrantProfileId: 'number',
      transferOutProhibited: 'boolean',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainName)) {
      $dara.Model.validateArray(this.domainName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

