// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContactResponseBody extends $dara.Model {
  CCity?: string;
  CCompany?: string;
  CCountry?: string;
  CName?: string;
  CProvince?: string;
  CVenu?: string;
  createDate?: string;
  ECity?: string;
  ECompany?: string;
  EName?: string;
  EProvince?: string;
  EVenu?: string;
  email?: string;
  postalCode?: string;
  regType?: string;
  requestId?: string;
  telArea?: string;
  telExt?: string;
  telMain?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      CCity: 'CCity',
      CCompany: 'CCompany',
      CCountry: 'CCountry',
      CName: 'CName',
      CProvince: 'CProvince',
      CVenu: 'CVenu',
      createDate: 'CreateDate',
      ECity: 'ECity',
      ECompany: 'ECompany',
      EName: 'EName',
      EProvince: 'EProvince',
      EVenu: 'EVenu',
      email: 'Email',
      postalCode: 'PostalCode',
      regType: 'RegType',
      requestId: 'RequestId',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telMain: 'TelMain',
      updateDate: 'UpdateDate',
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
      createDate: 'string',
      ECity: 'string',
      ECompany: 'string',
      EName: 'string',
      EProvince: 'string',
      EVenu: 'string',
      email: 'string',
      postalCode: 'string',
      regType: 'string',
      requestId: 'string',
      telArea: 'string',
      telExt: 'string',
      telMain: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

