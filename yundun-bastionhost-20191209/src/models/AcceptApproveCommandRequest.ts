// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcceptApproveCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the command that you want to approve.
   * 
   * >  You can call the [ListApproveCommands](https://help.aliyun.com/document_detail/2584310.html) operation to query the IDs of all commands that need to be reviewed.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  commandId?: string;
  /**
   * @remarks
   * The ID of the bastion host.
   * 
   * >  You can call the DescribeInstances operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      instanceId: 'string',
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

