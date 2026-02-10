// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDigitalSignOrderShrinkRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  extendMessage?: string;
  orderContextShrink?: string;
  /**
   * @example
   * CREATE_DIGITALSMS_SIGN
   */
  orderType?: string;
  ownerId?: number;
  /**
   * @example
   * 41
   */
  qualificationId?: number;
  /**
   * @example
   * 49
   */
  qualificationVersion?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 80
   */
  signId?: number;
  /**
   * @example
   * 0
   */
  signIndustry?: number;
  /**
   * @example
   * 示例值示例值
   */
  signName?: string;
  /**
   * @example
   * 0
   */
  signSource?: number;
  /**
   * @example
   * 110000001750080
   */
  submitter?: string;
  static names(): { [key: string]: string } {
    return {
      extendMessage: 'ExtendMessage',
      orderContextShrink: 'OrderContext',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      qualificationVersion: 'QualificationVersion',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signId: 'SignId',
      signIndustry: 'SignIndustry',
      signName: 'SignName',
      signSource: 'SignSource',
      submitter: 'Submitter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendMessage: 'string',
      orderContextShrink: 'string',
      orderType: 'string',
      ownerId: 'number',
      qualificationId: 'number',
      qualificationVersion: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signId: 'number',
      signIndustry: 'number',
      signName: 'string',
      signSource: 'number',
      submitter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

