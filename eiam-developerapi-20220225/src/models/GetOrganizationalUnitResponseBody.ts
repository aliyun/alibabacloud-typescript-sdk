// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrganizationalUnitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the organizational unit was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652083425923
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * xxxxx
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The external ID of the organizational unit.
   * 
   * @example
   * id_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitExternalId?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The name of the organizational unit.
   * 
   * @example
   * name001
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The source ID of the organizational unit.
   * 
   * @example
   * id_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitSourceId?: string;
  /**
   * @remarks
   * The source type of the organizational unit. Valid values:
   * 
   * *   build_in: The organizational unit was created in Identity as a Service (IDaaS).
   * *   ding_talk: The organizational unit was imported from DingTalk.
   * *   ad: The organizational unit was imported from Microsoft Active Directory (AD).
   * *   ldap: The organizational unit was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * @example
   * build_in
   */
  organizationalUnitSourceType?: string;
  /**
   * @remarks
   * The ID of the parent organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  /**
   * @remarks
   * The time when the organizational unit was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652083425923
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      instanceId: 'instanceId',
      organizationalUnitExternalId: 'organizationalUnitExternalId',
      organizationalUnitId: 'organizationalUnitId',
      organizationalUnitName: 'organizationalUnitName',
      organizationalUnitSourceId: 'organizationalUnitSourceId',
      organizationalUnitSourceType: 'organizationalUnitSourceType',
      parentId: 'parentId',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      organizationalUnitExternalId: 'string',
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      organizationalUnitSourceId: 'string',
      organizationalUnitSourceType: 'string',
      parentId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

