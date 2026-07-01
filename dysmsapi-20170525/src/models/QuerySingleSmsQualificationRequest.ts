// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySingleSmsQualificationRequest extends $dara.Model {
  /**
   * @remarks
   * The review ticket ID. You can call the [QuerySmsQualificationRecord](~~QuerySmsQualificationRecord~~) operation to obtain the qualifications and corresponding review ticket IDs under your current account.
   * 
   * @example
   * 2001****
   */
  orderId?: number;
  ownerId?: number;
  /**
   * @remarks
   * The qualification ID, which is the ID returned when you [apply for a qualification](~~SubmitSmsQualification~~). You can call the [QuerySmsQualificationRecord](~~QuerySmsQualificationRecord~~) operation to obtain the qualification IDs under your current account.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000****
   */
  qualificationGroupId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      qualificationGroupId: 'QualificationGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      ownerId: 'number',
      qualificationGroupId: 'number',
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

