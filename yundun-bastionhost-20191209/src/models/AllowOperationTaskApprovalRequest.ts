// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllowOperationTaskApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * The approval ID of the O&M task.
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
   * The ID of the bastion host instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-lbj3bw4ma02
   */
  instanceId?: string;
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

