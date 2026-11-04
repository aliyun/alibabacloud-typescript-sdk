// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * >Notice: The Singapore site supports all channels, and the Germany site currently supports only WhatsApp.</notice>
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
   * FacebookBmId
   * 
   * @example
   * 393992929
   */
  facebookBmId?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * ins
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * viber_ins
   */
  instanceName?: string;
  /**
   * @remarks
   * Specifies whether the audit is confirmed.
   * 
   * @example
   * Y
   */
  isConfirmAudit?: string;
  /**
   * @remarks
   * The name of the ISV/client agreement file.
   * 
   * @example
   * https://a.com/1.pdf
   */
  isvTerms?: string;
  /**
   * @remarks
   * The enterprise address.
   * 
   * @example
   * example
   */
  officeAddress?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
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

