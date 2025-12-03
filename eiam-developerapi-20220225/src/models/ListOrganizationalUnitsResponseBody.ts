// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationalUnitsResponseBodyData extends $dara.Model {
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
   * test organizational unit
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
   * The external ID of the organizational unit. The external ID can be used to map external data to the data of the organizational unit in EIAM of Identity as a Service (IDaaS). By default, the external ID is the organizational unit ID.
   * 
   * Note: For organizational units with the same source type and source ID, each organizational unit has a unique external ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
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
   * If the organizational unit was created in IDaaS, its source ID is the ID of the IDaaS instance. If the organizational unit was imported, its source ID is the enterprise ID in the source. For example, if the organizational unit was imported from DingTalk, its source ID is the corpId value of the enterprise in DingTalk.
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

export class ListOrganizationalUnitsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried organizational units.
   */
  data?: ListOrganizationalUnitsResponseBodyData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListOrganizationalUnitsResponseBodyData },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

