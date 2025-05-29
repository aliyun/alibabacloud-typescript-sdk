// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubPartnerListResponseBodySubPartnerList extends $dara.Model {
  address?: string;
  agreementStatus?: string;
  agreementStatusDesc?: string;
  city?: string;
  companyName?: string;
  contact?: string;
  district?: string;
  joinTime?: string;
  masterAccount?: string;
  masterUid?: string;
  pid?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      agreementStatus: 'AgreementStatus',
      agreementStatusDesc: 'AgreementStatusDesc',
      city: 'City',
      companyName: 'CompanyName',
      contact: 'Contact',
      district: 'District',
      joinTime: 'JoinTime',
      masterAccount: 'MasterAccount',
      masterUid: 'MasterUid',
      pid: 'Pid',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      agreementStatus: 'string',
      agreementStatusDesc: 'string',
      city: 'string',
      companyName: 'string',
      contact: 'string',
      district: 'string',
      joinTime: 'string',
      masterAccount: 'string',
      masterUid: 'string',
      pid: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

