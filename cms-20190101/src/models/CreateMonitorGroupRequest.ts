// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitorGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The alert contact group. The alert notifications of the application group are sent to the alert contacts that belong to the alert contact group.
   * 
   * >  An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see [PutContact](~~PutContact~~) and [PutContactGroup](~~PutContactGroup~~).
   * 
   * @example
   * ECS_Alert_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: 'string',
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

