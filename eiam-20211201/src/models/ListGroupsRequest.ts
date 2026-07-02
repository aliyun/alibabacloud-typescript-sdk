// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Group external ID.
   * 
   * @example
   * group_external_id
   */
  groupExternalId?: string;
  /**
   * @remarks
   * Group ID list.
   */
  groupIds?: string[];
  /**
   * @remarks
   * Group name. The query uses exact matching.
   * 
   * @example
   * name_test
   */
  groupName?: string;
  /**
   * @remarks
   * Group name prefix. The query uses prefix matching.
   * 
   * @example
   * name
   */
  groupNameStartsWith?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      groupExternalId: 'GroupExternalId',
      groupIds: 'GroupIds',
      groupName: 'GroupName',
      groupNameStartsWith: 'GroupNameStartsWith',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupExternalId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      groupNameStartsWith: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

