// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContactTemplateRequest extends $dara.Model {
  CCity?: string;
  CCompany?: string;
  CCountry?: string;
  CName?: string;
  CProvince?: string;
  CVenu?: string;
  contactTemplateId?: number;
  defaultTemplate?: boolean;
  ECity?: string;
  ECompany?: string;
  EName?: string;
  EProvince?: string;
  EVenu?: string;
  email?: string;
  lang?: string;
  postalCode?: string;
  regType?: string;
  telArea?: string;
  telExt?: string;
  telMain?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      CCity: 'CCity',
      CCompany: 'CCompany',
      CCountry: 'CCountry',
      CName: 'CName',
      CProvince: 'CProvince',
      CVenu: 'CVenu',
      contactTemplateId: 'ContactTemplateId',
      defaultTemplate: 'DefaultTemplate',
      ECity: 'ECity',
      ECompany: 'ECompany',
      EName: 'EName',
      EProvince: 'EProvince',
      EVenu: 'EVenu',
      email: 'Email',
      lang: 'Lang',
      postalCode: 'PostalCode',
      regType: 'RegType',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telMain: 'TelMain',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CCity: 'string',
      CCompany: 'string',
      CCountry: 'string',
      CName: 'string',
      CProvince: 'string',
      CVenu: 'string',
      contactTemplateId: 'number',
      defaultTemplate: 'boolean',
      ECity: 'string',
      ECompany: 'string',
      EName: 'string',
      EProvince: 'string',
      EVenu: 'string',
      email: 'string',
      lang: 'string',
      postalCode: 'string',
      regType: 'string',
      telArea: 'string',
      telExt: 'string',
      telMain: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

