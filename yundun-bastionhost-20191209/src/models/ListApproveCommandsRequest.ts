// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApproveCommandsRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the approval request. Valid values:
   * 
   * - **1**: Pending approval.
   * 
   * - **2**: Approved.
   * > If this parameter is not specified, the default value is 1, and only approval requests in the pending approval status are queried.
   * 
   * @example
   * 1
   */
  approvalStatus?: number;
  /**
   * @remarks
   * The ID of the command approval request.
   * 
   * @example
   * 1
   */
  approveCommandId?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-zvp2xvysf08
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paging query.  
   * The maximum value of the PageSize parameter is 1000. The default value is 20. If this parameter is left empty, 20 entries are returned by default.
   * > Do not leave the PageSize parameter empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      approveCommandId: 'ApproveCommandId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'number',
      approveCommandId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
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

