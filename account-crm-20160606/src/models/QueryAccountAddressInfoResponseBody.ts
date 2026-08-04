// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountAddressInfoResponseBodyProfileInfoCity extends $dara.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountAddressInfoResponseBodyProfileInfoDistrict extends $dara.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountAddressInfoResponseBodyProfileInfoProvince extends $dara.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountAddressInfoResponseBodyProfileInfo extends $dara.Model {
  accountAttr?: string;
  address?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  address5?: string;
  address6?: string;
  city?: QueryAccountAddressInfoResponseBodyProfileInfoCity;
  district?: QueryAccountAddressInfoResponseBodyProfileInfoDistrict;
  email?: string;
  havanaId?: string;
  nationalityCode?: string;
  postCode?: string;
  province?: QueryAccountAddressInfoResponseBodyProfileInfoProvince;
  selfServicingBusinessRegNum?: string;
  selfServicingIdentificationNum?: string;
  trueName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accountAttr: 'AccountAttr',
      address: 'Address',
      address2: 'Address2',
      address3: 'Address3',
      address4: 'Address4',
      address5: 'Address5',
      address6: 'Address6',
      city: 'City',
      district: 'District',
      email: 'Email',
      havanaId: 'HavanaId',
      nationalityCode: 'NationalityCode',
      postCode: 'PostCode',
      province: 'Province',
      selfServicingBusinessRegNum: 'SelfServicingBusinessRegNum',
      selfServicingIdentificationNum: 'SelfServicingIdentificationNum',
      trueName: 'TrueName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttr: 'string',
      address: 'string',
      address2: 'string',
      address3: 'string',
      address4: 'string',
      address5: 'string',
      address6: 'string',
      city: QueryAccountAddressInfoResponseBodyProfileInfoCity,
      district: QueryAccountAddressInfoResponseBodyProfileInfoDistrict,
      email: 'string',
      havanaId: 'string',
      nationalityCode: 'string',
      postCode: 'string',
      province: QueryAccountAddressInfoResponseBodyProfileInfoProvince,
      selfServicingBusinessRegNum: 'string',
      selfServicingIdentificationNum: 'string',
      trueName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.city && typeof (this.city as any).validate === 'function') {
      (this.city as any).validate();
    }
    if(this.district && typeof (this.district as any).validate === 'function') {
      (this.district as any).validate();
    }
    if(this.province && typeof (this.province as any).validate === 'function') {
      (this.province as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountAddressInfoResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  profileInfo?: QueryAccountAddressInfoResponseBodyProfileInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      profileInfo: 'ProfileInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      profileInfo: QueryAccountAddressInfoResponseBodyProfileInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.profileInfo && typeof (this.profileInfo as any).validate === 'function') {
      (this.profileInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

