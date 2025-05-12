// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the media workflow.
   * 
   * *   The value cannot be empty.
   * *   The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
   * *   The name can be up to 64 characters in length.
   * *   The value must be encoded in the UTF-8 format.
   * 
   * This parameter is required.
   * 
   * @example
   * mediaworkflow-example
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The topology of the media workflow. The value must be a JSON object that contains the activities and activity dependencies. For more information, see the **Sample topology** section of this topic.
   * 
   * >  The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
   * 
   * This parameter is required.
   */
  topology?: string;
  /**
   * @remarks
   * The triggering mode of the media workflow. Valid values:
   * 
   * *   **OssAutoTrigger**: The media workflow is automatically triggered.
   * *   **NotInAuto**: The media workflow is not automatically triggered.
   * 
   * @example
   * OssAutoTrigger
   */
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      topology: 'Topology',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      topology: 'string',
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

