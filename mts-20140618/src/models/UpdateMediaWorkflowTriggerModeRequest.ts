// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaWorkflowTriggerModeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media workflow that you want to update. To obtain the ID of the media workflow, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Workflows** > **Workflow Settings** in the left-side navigation pane.
   * 
   * This parameter is required.
   * 
   * @example
   * e00732b977da427d9177a4dee646****
   */
  mediaWorkflowId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The trigger mode of the media workflow. Valid values:
   * 
   * *   **OssAutoTrigger**: automatically triggers the media workflow.
   * *   **NotInAuto**: does not automatically trigger the media workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * NotInAuto
   */
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowId: 'MediaWorkflowId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      triggerMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

