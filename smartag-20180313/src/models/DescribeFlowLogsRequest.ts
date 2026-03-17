// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the flow log.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The ID of a flow log.
   * 
   * @example
   * fl-7a56mar1kfw9vj****
   */
  flowLogId?: string;
  /**
   * @remarks
   * The name of the flow log.
   * 
   * @example
   * DDE
   */
  flowLogName?: string;
  /**
   * @remarks
   * The location where the flow log is stored. Valid values:
   * 
   * *   **sls**: The flow log is stored in Log Service.
   * *   **netflow**: The flow log is stored on a NetFlow collector.
   * *   **all**: The flow log is stored both in Log Service and on a NetFlow collector.
   * 
   * @example
   * all
   */
  outputType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region that the flow logs are stored.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the flow log. Valid values:
   * 
   * *   **Active**: The flow log is enabled.
   * *   **Inactive**: The flow log is disabled.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      outputType: 'OutputType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      outputType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

