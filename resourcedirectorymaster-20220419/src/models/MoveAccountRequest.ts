// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member that you want to move.
   * 
   * This parameter is required.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the destination folder.
   * 
   * This parameter is required.
   * 
   * @example
   * fd-bVaRIG****
   */
  destinationFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      destinationFolderId: 'DestinationFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      destinationFolderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

