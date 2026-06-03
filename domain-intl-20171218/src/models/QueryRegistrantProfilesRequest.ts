// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRegistrantProfilesRequest extends $dara.Model {
  defaultRegistrantProfile?: boolean;
  email?: string;
  lang?: string;
  pageNum?: number;
  pageSize?: number;
  realNameStatus?: string;
  registrantOrganization?: string;
  registrantProfileId?: number;
  registrantProfileType?: string;
  registrantType?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRegistrantProfile: 'DefaultRegistrantProfile',
      email: 'Email',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      realNameStatus: 'RealNameStatus',
      registrantOrganization: 'RegistrantOrganization',
      registrantProfileId: 'RegistrantProfileId',
      registrantProfileType: 'RegistrantProfileType',
      registrantType: 'RegistrantType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRegistrantProfile: 'boolean',
      email: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      realNameStatus: 'string',
      registrantOrganization: 'string',
      registrantProfileId: 'number',
      registrantProfileType: 'string',
      registrantType: 'string',
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

