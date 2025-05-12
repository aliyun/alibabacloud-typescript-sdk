// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeactivateMediaWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media workflow that is deactivated.
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

