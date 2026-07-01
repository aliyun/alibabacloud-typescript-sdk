// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsAuthorizationLetterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of letter of authorization IDs.
   */
  authorizationLetterIdListShrink?: string;
  /**
   * @remarks
   * The unified social credit code of the authorizing party. The length cannot exceed 150 characters.
   * 
   * @example
   * 9****************A
   */
  organizationCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature name. If the authorization scope includes multiple signatures when you create the letter of authorization, the letters of authorization that contain the signature are returned.
   * 
   * @example
   * 菜鸟网络
   */
  signName?: string;
  /**
   * @remarks
   * The review status of the letter of authorization, which is related to the review status of the signature. Valid values:
   * - **INT**: Pending review. The letter of authorization has been created. After you submit a signature application, it enters the review process.
   * - **PASSED**: Review passed. When a signature in the authorized signature scope of the letter of authorization passes the review, the status of the letter of authorization changes to PASSED.
   * 
   * @example
   * PASSED
   */
  state?: string;
  /**
   * @remarks
   * The availability status of the letter of authorization, which is related to the validity period of the letter of authorization. Valid values:
   * 
   * - **VALID**: Available. The letter of authorization is within the validity period.
   * - **INVALID**: Unavailable. The letter of authorization has expired.
   * 
   * @example
   * VALID
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationLetterIdListShrink: 'AuthorizationLetterIdList',
      organizationCode: 'OrganizationCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      state: 'State',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationLetterIdListShrink: 'string',
      organizationCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      state: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

