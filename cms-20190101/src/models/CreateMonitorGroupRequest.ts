// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitorGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The alert contact group. Alert notifications for the application group are sent to the alert contacts in this alert contact group.
   * 
   * > An alert contact group contains one or more alert contacts. For more information about how to create alert contacts and alert contact groups, see [PutContact](~~PutContact~~) and [PutContactGroup](~~PutContactGroup~~).
   * 
   * @example
   * ECS_Alert_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. A dry run checks items such as permissions and instance status. Valid values:
   * 
   * - **false** (default): Sends a normal request. If the request passes the check, the name and description of the route table are modified.
   * - **true**: Sends a dry run request. Only the check is performed, and the name and description of the route table are not modified. The check items include whether required parameters are specified and whether the request format is valid. If the request fails the check, an error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
      dryRun: 'DryRun',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: 'string',
      dryRun: 'boolean',
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

