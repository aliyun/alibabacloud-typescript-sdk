// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationalUnitsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the organization was created. This is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652083425923
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the organization.
   * 
   * @example
   * 测试组织
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
   * The external ID of the organization. This ID is used to map external data to the organization\\"s data in IDaaS. The default value is the IDaaS organization ID.
   * 
   * Note: The external ID must be unique for the same source type and source ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitExternalId?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * name001
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The source ID of the organization.
   * 
   * For the \\`build_in\\` type, the default value is the instance ID. For other types, the value is the enterprise ID from the source. For example, if the source is DingTalk, the value is the \\`corpId\\` of the DingTalk enterprise.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  organizationalUnitSourceId?: string;
  /**
   * @remarks
   * The source type of the organization. Valid values:
   * 
   * - \\`build_in\\`: The organization is created in IDaaS.
   * 
   * - \\`ding_talk\\`: The organization is imported from DingTalk.
   * 
   * - \\`ad\\`: The organization is imported from Active Directory (AD).
   * 
   * - \\`ldap\\`: The organization is imported from LDAP.
   * 
   * @example
   * build_in
   */
  organizationalUnitSourceType?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  /**
   * @remarks
   * The time when the organization was last updated. This is a UNIX timestamp. Unit: milliseconds.
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
   * A list of data objects.
   */
  data?: ListOrganizationalUnitsResponseBodyData[];
  /**
   * @remarks
   * The total number of records.
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

