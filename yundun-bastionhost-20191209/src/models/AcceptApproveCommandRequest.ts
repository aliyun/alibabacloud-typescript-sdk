// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcceptApproveCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the command to be approved for execution.
   * > You can call the [ListApproveCommands](https://help.aliyun.com/document_detail/2584310.html) operation to query all command IDs that require approval.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  commandId?: string;
  /**
   * @remarks
   * The instance ID of the bastion host.
   * > You can call the DescribeInstances operation to obtain the bastion host instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      instanceId: 'string',
      projectId: 'number',
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

