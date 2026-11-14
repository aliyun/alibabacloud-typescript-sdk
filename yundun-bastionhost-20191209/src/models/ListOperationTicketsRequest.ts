// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationTicketsRequest extends $dara.Model {
  /**
   * @remarks
   * The approval status. Valid values:
   * - 1: Pending approval.
   * - 2: Processed.
   * 
   * @example
   * 1
   */
  approvalStatus?: number;
  /**
   * @remarks
   * The address of the O&M asset for exact search.
   * 
   * @example
   * 10.167.XX.XX
   */
  assetAddress?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the O&M ticket.
   * 
   * @example
   * 1
   */
  operationTicketId?: string;
  /**
   * @remarks
   * The page number for a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query.  
   * The maximum value of the PageSize parameter is 1000. Default value: 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > We recommend that you specify a value for the PageSize parameter.
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
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      assetAddress: 'AssetAddress',
      instanceId: 'InstanceId',
      operationTicketId: 'OperationTicketId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'number',
      assetAddress: 'string',
      instanceId: 'string',
      operationTicketId: 'string',
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

