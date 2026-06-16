// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationalUnitsResponseBodyOrganizationalUnits extends $dara.Model {
  /**
   * @remarks
   * The time when the organizational unit was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * Test organization
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
   * Indicates whether the organizational unit is a leaf node. A value of true indicates that the organizational unit has no child nodes. A value of false indicates that the organizational unit has child nodes.
   * 
   * @example
   * false
   */
  leaf?: boolean;
  /**
   * @remarks
   * The external ID of the organizational unit. This ID is used to map the data of the organizational unit to the data of an external system. By default, the value of this parameter is the organizational unit ID.
   * 
   * Note: The external ID must be unique within the same source type and source ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitExternalId?: string;
  /**
   * @remarks
   * The organizational unit ID.
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
   * test_organizationalUnit_name
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The source ID of the organizational unit.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  organizationalUnitSourceId?: string;
  /**
   * @remarks
   * The source type of the organizational unit. Valid values:
   * 
   * - build_in: The organizational unit is created in IDaaS.
   * - ding_talk: The organizational unit is imported from DingTalk.
   * - ad: The organizational unit is imported from Active Directory (AD).
   * - ldap: The organizational unit is imported from a Lightweight Directory Access Protocol (LDAP) directory.
   * - we_com: The organizational unit is imported from WeCom.
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
   * The time when the organizational unit was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      leaf: 'Leaf',
      organizationalUnitExternalId: 'OrganizationalUnitExternalId',
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
      organizationalUnitSourceId: 'OrganizationalUnitSourceId',
      organizationalUnitSourceType: 'OrganizationalUnitSourceType',
      parentId: 'ParentId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      leaf: 'boolean',
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
   * The list of organizational units.
   */
  organizationalUnits?: ListOrganizationalUnitsResponseBodyOrganizationalUnits[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that are returned. This value is the total number of matched entries. The maximum number of entries that can be returned in a single request is specified by PageSize.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      organizationalUnits: 'OrganizationalUnits',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnits: { 'type': 'array', 'itemType': ListOrganizationalUnitsResponseBodyOrganizationalUnits },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnits)) {
      $dara.Model.validateArray(this.organizationalUnits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

