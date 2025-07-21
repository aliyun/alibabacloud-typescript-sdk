// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIsvCustomerTermsRequest extends $dara.Model {
  /**
   * @remarks
   * The business scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * Marketing products
   */
  businessDesc?: string;
  /**
   * @remarks
   * The enterprise mail.
   * 
   * This parameter is required.
   * 
   * @example
   * partner@aliyun.com
   */
  contactMail?: string;
  /**
   * @remarks
   * The country code.
   * 
   * >  For more information about country codes, see [Country codes](https://help.aliyun.com/document_detail/608210.html).
   * 
   * This parameter is required.
   * 
   * @example
   * CN
   */
  countryId?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  custName?: string;
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ISV or Client agreement.
   * 
   * This parameter is required.
   * 
   * @example
   * isvTerms.pdf
   */
  isvTerms?: string;
  /**
   * @remarks
   * The enterprise address.
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  officeAddress?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      businessDesc: 'BusinessDesc',
      contactMail: 'ContactMail',
      countryId: 'CountryId',
      custName: 'CustName',
      custSpaceId: 'CustSpaceId',
      isvTerms: 'IsvTerms',
      officeAddress: 'OfficeAddress',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDesc: 'string',
      contactMail: 'string',
      countryId: 'string',
      custName: 'string',
      custSpaceId: 'string',
      isvTerms: 'string',
      officeAddress: 'string',
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

