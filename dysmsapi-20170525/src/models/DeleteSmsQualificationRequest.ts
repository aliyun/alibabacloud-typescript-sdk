// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSmsQualificationRequest extends $dara.Model {
  /**
   * @remarks
   * The review ticket ID. You can obtain the qualification and its corresponding review ticket ID under the current account by calling the [QuerySmsQualificationRecord](~~QuerySmsQualificationRecord~~) operation, or on the [Qualification Management](https://dysms.console.aliyun.com/domestic/text/qualification) page of Domestic Messages in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * 2001****
   */
  orderId?: number;
  ownerId?: number;
  /**
   * @remarks
   * The qualification ID, which is the ID returned when you [apply for a qualification](~~SubmitSmsQualification~~). You can obtain the qualification ID under the current account by calling the [QuerySmsQualificationRecord](~~QuerySmsQualificationRecord~~) operation, or on the [Qualification Management](https://dysms.console.aliyun.com/domestic/text/qualification) page of Domestic Messages in the console.
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

