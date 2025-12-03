// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the group was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The group description.
   * 
   * @example
   * description_demo
   */
  description?: string;
  /**
   * @remarks
   * The external ID of the group.
   * 
   * @example
   * group_ufdsasn35ea5lmthk267xxxxx
   */
  groupExternalId?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_ufdsasn35ea5lmthk267xxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * name_test
   */
  groupName?: string;
  /**
   * @remarks
   * The source ID of the group.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  groupSourceId?: string;
  /**
   * @remarks
   * The source type of the group. Valid values: build_in, ding_talk, ad, and ldap.
   * 
   * @example
   * build_in
   */
  groupSourceType?: string;
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
   * The time when the group was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      groupExternalId: 'groupExternalId',
      groupId: 'groupId',
      groupName: 'groupName',
      groupSourceId: 'groupSourceId',
      groupSourceType: 'groupSourceType',
      instanceId: 'instanceId',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      groupExternalId: 'string',
      groupId: 'string',
      groupName: 'string',
      groupSourceId: 'string',
      groupSourceType: 'string',
      instanceId: 'string',
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

