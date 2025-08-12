// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMonitorGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The alert groups that can receive alert notifications for the application group.
   * 
   * @example
   * alarm_ecs_group
   */
  contactGroups?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * ecs_group
   */
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: 'string',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

