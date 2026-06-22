// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * This parameter is required.
   * 
   * @example
   * VIBER
   */
  channelType?: string;
  /**
   * @remarks
   * The contact email address.
   * 
   * @example
   * example
   */
  contactMail?: string;
  /**
   * @remarks
   * The country code.
   * 
   * @example
   * 1
   */
  countryId?: string;
  /**
   * @remarks
   * The ID of the Facebook Business Manager (BM).
   * 
   * @example
   * 393992929
   */
  facebookBmId?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * ins
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * viber_ins
   */
  instanceName?: string;
  /**
   * @remarks
   * Specifies whether to confirm the audit.
   * 
   * @example
   * Y
   */
  isConfirmAudit?: string;
  /**
   * @remarks
   * The URL of the ISV terms file.
   * 
   * @example
   * https://a.com/1.pdf
   */
  isvTerms?: string;
  /**
   * @remarks
   * The office address of the business.
   * 
   * @example
   * example
   */
  officeAddress?: string;
  /**
   * @remarks
   * The ID of the resource group that contains the instance.
   * 
   * @example
   * example
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      contactMail: 'ContactMail',
      countryId: 'CountryId',
      facebookBmId: 'FacebookBmId',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      isConfirmAudit: 'IsConfirmAudit',
      isvTerms: 'IsvTerms',
      officeAddress: 'OfficeAddress',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      contactMail: 'string',
      countryId: 'string',
      facebookBmId: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      isConfirmAudit: 'string',
      isvTerms: 'string',
      officeAddress: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

