// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Description. The maximum length is 256 characters.
   * 
   * @example
   * this is a test.
   */
  description?: string;
  /**
   * @remarks
   * Group external ID, used for association with external systems. The default value is the group ID. The maximum length is 64 characters.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupExternalId?: string;
  /**
   * @remarks
   * Group name. The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * name_test
   */
  groupName?: string;
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
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupExternalId: 'GroupExternalId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupExternalId: 'string',
      groupName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

