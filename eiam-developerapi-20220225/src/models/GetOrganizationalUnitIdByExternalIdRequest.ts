// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrganizationalUnitIdByExternalIdRequest extends $dara.Model {
  /**
   * @remarks
   * The external ID of the organizational unit. The external ID can be used to map external data to the data of the organizational unit in Employee Identity and Access Management (EIAM) of Identity as a Service (IDaaS). By default, the external ID is the organizational unit ID.
   * 
   * Note: For organizational units with the same source type and source ID, each organizational unit has a unique external ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitExternalId?: string;
  /**
   * @remarks
   * The source ID of the organizational unit.
   * 
   * If the organizational unit was created in IDaaS, its source ID is the ID of the IDaaS instance. If the organizational unit was imported, its source ID is the enterprise ID in the source. For example, if the organizational unit was imported from DingTalk, its source ID is the corpId value of the enterprise in DingTalk.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  organizationalUnitSourceId?: string;
  /**
   * @remarks
   * The source type of the organizational unit. Valid values:
   * 
   * *   build_in: The organizational unit was created in IDaaS.
   * *   ding_talk: The organizational unit was imported from DingTalk.
   * *   ad: The organizational unit was imported from Microsoft Active Directory (AD).
   * *   ldap: The organizational unit was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * This parameter is required.
   * 
   * @example
   * build_in
   */
  organizationalUnitSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitExternalId: 'organizationalUnitExternalId',
      organizationalUnitSourceId: 'organizationalUnitSourceId',
      organizationalUnitSourceType: 'organizationalUnitSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitExternalId: 'string',
      organizationalUnitSourceId: 'string',
      organizationalUnitSourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

