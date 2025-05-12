// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineRequest extends $dara.Model {
  extendConfig?: string;
  /**
   * @remarks
   * The new name of the MPS queue. The value can contain letters, digits, and special characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot start with a special character.
   * 
   * This parameter is required.
   * 
   * @example
   * example-pipeline-****
   */
  name?: string;
  /**
   * @remarks
   * The Message Service (MNS) configuration, such as the information about the MNS queue or topic. For more information, see the "NotifyConfig" section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   * 
   * @example
   * {"Topic":"example-topic-****"}
   */
  notifyConfig?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the MPS queue that you want to update. To view the MPS queue ID, log on to the **MPS console** and choose **Global Settings** > **Pipelines** in the left-side navigation pane.
   * 
   * This parameter is required.
   * 
   * @example
   * d1ce4d3efcb549419193f50f1fcd****
   */
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role that is assigned to the current RAM user. To obtain the role, you can log on to the **Resource Access Management (RAM) console** and choose **Identities** > **Roles** in the left-side navigation pane.
   * 
   * @example
   * AliyunMTSDefaultRole
   */
  role?: string;
  /**
   * @remarks
   * The new state of the MPS queue.
   * 
   * *   **Active**: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
   * *   **Paused**: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
   * 
   * This parameter is required.
   * 
   * @example
   * Paused
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      extendConfig: 'ExtendConfig',
      name: 'Name',
      notifyConfig: 'NotifyConfig',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendConfig: 'string',
      name: 'string',
      notifyConfig: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      role: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

