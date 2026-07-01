// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualificationOssInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. When applying for a qualification or creating an authorization letter file, enter **dysms**.
   * 
   * This parameter is required.
   * 
   * @example
   * dysms
   */
  bizType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
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

