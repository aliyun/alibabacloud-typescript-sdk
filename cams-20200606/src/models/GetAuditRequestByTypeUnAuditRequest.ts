// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditRequestByTypeUnAuditRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-***
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * viberOpen
   */
  requestType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      requestType: 'RequestType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      ownerId: 'number',
      requestType: 'string',
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

