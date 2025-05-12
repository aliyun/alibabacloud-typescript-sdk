// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateMediaWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media workflow. You can obtain the ID from the response of the [AddMediaWorkflow](https://help.aliyun.com/document_detail/44437.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 93ab850b4f6f44eab54b6e9181d4****
   */
  mediaWorkflowId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowId: 'MediaWorkflowId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowId: 'string',
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

