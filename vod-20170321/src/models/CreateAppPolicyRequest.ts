// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppPolicyRequest extends $dara.Model {
  description?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  policyName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  policyValue?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ownerId: 'OwnerId',
      policyName: 'PolicyName',
      policyValue: 'PolicyValue',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ownerId: 'number',
      policyName: 'string',
      policyValue: 'string',
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

