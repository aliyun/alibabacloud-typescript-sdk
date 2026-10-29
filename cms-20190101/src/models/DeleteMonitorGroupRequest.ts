// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMonitorGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. A dry run includes checks on permissions and instance status. Valid values:
   * 
   * - **false** (default): Sends a normal request. If the request passes the check, the name and description of the route table are modified.
   * - **true**: Sends a dry run request. Only the check is performed, and the name and description of the route table are not modified. Check items include whether required parameters are specified and the request format. If the check fails, the corresponding error is returned. If the check passes, the `DryRunOperation` error code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 246139436
   */
  groupId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      groupId: 'number',
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

