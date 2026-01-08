// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPledgeTemplateAddressRequest extends $dara.Model {
  /**
   * @example
   * cams-x***
   */
  custSpaceId?: string;
  /**
   * @example
   * it
   */
  industryType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      industryType: 'IndustryType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      industryType: 'string',
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

