// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetViberByRequestNoRequest extends $dara.Model {
  /**
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 86512358****
   */
  requestNo?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      requestNo: 'RequestNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      ownerId: 'number',
      requestNo: 'string',
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

