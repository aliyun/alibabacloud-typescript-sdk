// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RejectOperationTaskApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * The O&M task approval ID.
   * > You can call the ListTodoOpsTaskApprovals operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  approveId?: string;
  /**
   * @remarks
   * The instance ID of the bastion host.
   * 
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      approveId: 'ApproveId',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveId: 'string',
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

