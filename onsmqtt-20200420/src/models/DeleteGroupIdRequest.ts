// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGroupIdRequest extends $dara.Model {
  /**
   * @remarks
   * The group ID that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the group ID that you want to delete belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
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

