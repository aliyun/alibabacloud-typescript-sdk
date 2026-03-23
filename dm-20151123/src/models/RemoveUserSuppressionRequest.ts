// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUserSuppressionRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the suppressed address. To specify multiple IDs, separate them with commas (,). Call the ListUserSuppression operation to obtain the suppression ID.
   * 
   * You can enter multiple values, separated by a comma ",".
   * 
   * You can call ListUserSuppression to obtain the SuppressionId.
   * 
   * @example
   * 59511
   */
  suppressionIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      suppressionIds: 'SuppressionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      suppressionIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

