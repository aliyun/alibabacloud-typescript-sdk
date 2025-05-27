// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseRegisterAccountRequest extends $dara.Model {
  /**
   * @example
   * 资方支付平台
   */
  alias?: string;
  encryptPassword?: string;
  encryptTicket?: string;
  loginEmail?: string;
  /**
   * @example
   * 668514d8083f058f78f7199a
   */
  organizationId?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A93073FC-1E86-58BA-AB83-54DA6BDB4F03
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  showCompleteInfo?: boolean;
  siteNick?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      encryptPassword: 'EncryptPassword',
      encryptTicket: 'EncryptTicket',
      loginEmail: 'LoginEmail',
      organizationId: 'OrganizationId',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      requestId: 'RequestId',
      showCompleteInfo: 'ShowCompleteInfo',
      siteNick: 'SiteNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      encryptPassword: 'string',
      encryptTicket: 'string',
      loginEmail: 'string',
      organizationId: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      requestId: 'string',
      showCompleteInfo: 'boolean',
      siteNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

