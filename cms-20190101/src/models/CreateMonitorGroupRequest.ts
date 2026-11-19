// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitorGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate a parameter value from your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length.
   * 
   * @example
   * 6868E9A1-56E6-5FD7-9684-E2963BBAFB5F
   */
  clientToken?: string;
  /**
   * @remarks
   * The alert contact group. Alert notifications for the application group are sent to the alert contacts in this alert contact group.
   * 
   * > An alert contact group is a collection of alert contacts and can contain one or more alert contacts. For more information about how to create alert contacts and alert contact groups, see [PutContact](~~PutContact~~) and [PutContactGroup](~~PutContactGroup~~).
   * 
   * @example
   * ECS_Alert_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request, including permission and instance status checks. Valid values:
   * 
   * - **false** (default): Sends a normal request. If the request passes the check, the name and description of the route table are modified.
   * - **true**: Sends a dry run request. Only validation is performed, and the name and description of the route table are not modified. Check items include whether required parameters are specified and the request format. If the check fails, the corresponding error is returned. If the check passes, the `DryRunOperation` error code is returned.
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
      clientToken: 'ClientToken',
      contactGroups: 'ContactGroups',
      dryRun: 'DryRun',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

