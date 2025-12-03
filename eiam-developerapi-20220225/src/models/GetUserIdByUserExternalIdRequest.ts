// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserIdByUserExternalIdRequest extends $dara.Model {
  /**
   * @remarks
   * The external ID of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx001
   */
  userExternalId?: string;
  /**
   * @remarks
   * The source ID of the account. If the account was created in IDaaS, its source ID is the ID of the IDaaS instance. If the account was imported, its source ID is the enterprise ID in the source. For example, if the account was imported from DingTalk, its source ID is the corpId value of the enterprise in DingTalk.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  userSourceId?: string;
  /**
   * @remarks
   * The source type of the account. Valid values:
   * 
   * *   build_in: The account was created in Identity as a Service (IDaaS).
   * *   ding_talk: The account was imported from DingTalk.
   * *   ad: The account was imported from Microsoft Active Directory (AD).
   * *   ldap: The account was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * This parameter is required.
   * 
   * @example
   * build_in
   */
  userSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      userExternalId: 'userExternalId',
      userSourceId: 'userSourceId',
      userSourceType: 'userSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userExternalId: 'string',
      userSourceId: 'string',
      userSourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

