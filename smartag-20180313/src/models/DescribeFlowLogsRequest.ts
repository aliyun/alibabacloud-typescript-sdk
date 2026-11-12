// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the flow log instance.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The ID of the flow log instance.
   * 
   * @example
   * fl-7a56mar1kfw9vj****
   */
  flowLogId?: string;
  /**
   * @remarks
   * The name of the flow log instance.
   * 
   * @example
   * DDE
   */
  flowLogName?: string;
  /**
   * @remarks
   * The output type of the flow log. Valid values:
   * 
   * - **sls**: Flow logs are stored in Simple Log Service.
   * 
   * - **netflow**: Flow logs are stored on the NetFlow server that you configured.
   * 
   * - **all**: Flow logs are stored in both Simple Log Service and the NetFlow server that you configured.
   * 
   * @example
   * all
   */
  outputType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paging query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the flow log instance.
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
   * The status of the flow log instance. Valid values:
   * 
   * - **Active**: Started.
   * 
   * - **Inactive**: Not started.
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

