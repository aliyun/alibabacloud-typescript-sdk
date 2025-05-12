// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaWorkflowListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the media workflows that you want to query. To obtain the IDs of the media workflows, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Workflows** > **Workflow Settings** in the left-side navigation pane. You can query up to 10 media workflows at a time. Separate multiple IDs of media workflows with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 93ab850b4f6f44eab54b6e9181d4****,72dfa5e679ab4be9a3ed9974c736****
   */
  mediaWorkflowIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowIds: 'MediaWorkflowIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowIds: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

