// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * 123@alibaba.com
   */
  contactMail?: string;
  /**
   * @remarks
   * The country code ID.
   * 
   * > For detailed country codes, refer to [Country codes](https://help.aliyun.com/document_detail/608210.html).
   * 
   * @example
   * 1
   */
  countryId?: string;
  /**
   * @remarks
   * fb bmId
   * 
   * @example
   * 393998****
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
   * The instance ID, which uniquely identifies the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 82838838****
   */
  instanceId?: string;
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
   * Specifies whether to automatically confirm.
   * 
   * @example
   * Y
   */
  isConfirmAudit?: string;
  /**
   * @remarks
   * The ISV/client agreement file name.
   * 
   * @example
   * https://aa.com/a.pdf
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
  static names(): { [key: string]: string } {
    return {
      contactMail: 'ContactMail',
      countryId: 'CountryId',
      facebookBmId: 'FacebookBmId',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isConfirmAudit: 'IsConfirmAudit',
      isvTerms: 'IsvTerms',
      officeAddress: 'OfficeAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactMail: 'string',
      countryId: 'string',
      facebookBmId: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isConfirmAudit: 'string',
      isvTerms: 'string',
      officeAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

