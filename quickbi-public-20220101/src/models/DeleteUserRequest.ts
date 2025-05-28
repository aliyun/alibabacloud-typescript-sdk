// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the successor. If not empty, the report resources in the workspace of the deleted user will be transferred to the successor; otherwise, they will be transferred to the space owner.
   * - The successor cannot be an organization visitor
   * - The permissions of the successor in the workspace must not be less than those of the deleted user, with management permissions > development permissions > sharing permissions > viewing permissions
   * - If the successor is not in the workspace, they will be automatically added to the workspace
   * 
   * @example
   * f5****afccd9e434a274
   */
  transferUserId?: string;
  /**
   * @remarks
   * The ID of the user to be deleted. This user ID is the Quick BI UserID, not the Alibaba Cloud UID.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      transferUserId: 'TransferUserId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferUserId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

