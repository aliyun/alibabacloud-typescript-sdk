// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPipelineListRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IDs of the MPS queues that you want to query. To view the IDs, you can log on to the **MPS console** and choose **Global Settings** > **Pipelines** in the left-side navigation pane. You can query up to 10 MPS queues at a time. Separate multiple IDs of MPS queues with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * d1ce4d3efcb549419193f50f1fcd****,72dfa5e679ab4be9a3ed9974c736****
   */
  pipelineIds?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineIds: 'PipelineIds',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineIds: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

