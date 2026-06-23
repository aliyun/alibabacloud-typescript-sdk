// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RejectOperationTaskApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the O&M task approval.
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
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveId: 'string',
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

