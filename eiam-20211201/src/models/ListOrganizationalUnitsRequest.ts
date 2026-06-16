// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationalUnitsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of organizational unit IDs. The number of IDs in the list cannot exceed 100.
   * 
   * @example
   * [ou_wovwffm62xifdziem7an7xxxxx]
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The name of the organizational unit. An exact match is used for the query.
   * 
   * @example
   * name_001
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The prefix of the name of the organizational unit. A left-side match is used for the query.
   * 
   * @example
   * name
   */
  organizationalUnitNameStartsWith?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
      organizationalUnitName: 'OrganizationalUnitName',
      organizationalUnitNameStartsWith: 'OrganizationalUnitNameStartsWith',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      organizationalUnitName: 'string',
      organizationalUnitNameStartsWith: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

