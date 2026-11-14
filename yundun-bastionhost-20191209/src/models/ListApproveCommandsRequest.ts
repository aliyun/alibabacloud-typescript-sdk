// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApproveCommandsRequest extends $dara.Model {
  /**
   * @remarks
   * The approval status. Valid values:
   * - 1: Pending.
   * - 2: Processed.
   * 
   * @example
   * 1
   */
  approvalStatus?: number;
  /**
   * @remarks
   * The ID of the command approval.
   * 
   * @example
   * 1
   */
  approveCommandId?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-zvp2xvysf08
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the current page for a paged query. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query.  
   * The maximum value of the PageSize parameter is 1000. The default number of entries per page is 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > Specify a value for the PageSize parameter.
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
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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

