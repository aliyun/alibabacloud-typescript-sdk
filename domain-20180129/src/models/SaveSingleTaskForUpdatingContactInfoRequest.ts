// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForUpdatingContactInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add a transfer-out restriction. This parameter takes effect only when **ContactType** is **registrant**. It indicates whether to restrict domain transfer-out for 60 days after the registrant is updated. Default value: **false**, which means no transfer-out restriction is applied.
   * 
   * @example
   * false
   */
  addTransferLock?: boolean;
  /**
   * @remarks
   * Contact type. Valid values:
   * - **registrant**
   * - **admin**
   * - **billing**
   * - **tech**
   * 
   * This parameter is required.
   * 
   * @example
   * registrant
   */
  contactType?: string;
  /**
   * @remarks
   * Domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Domain instance ID.
   * 
   * @example
   * S123456789
   */
  instanceId?: string;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Information template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * User IP address.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      addTransferLock: 'AddTransferLock',
      contactType: 'ContactType',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTransferLock: 'boolean',
      contactType: 'string',
      domainName: 'string',
      instanceId: 'string',
      lang: 'string',
      registrantProfileId: 'number',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

