// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePipelineRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the MPS queue that you want to delete. To obtain the ID of the MPS queue, you can log on to the **MPS console** and choose **Global Settings** > **Pipelines** in the left-side navigation pane.
   * 
   * This parameter is required.
   * 
   * @example
   * d1ce4d3efcb549419193f50f1fcd****
   */
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
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

