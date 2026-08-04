// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountAddressInfoWithoutHavanaResponseBodyProfileInfoCity extends $dara.Model {
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

export class QueryAccountAddressInfoWithoutHavanaResponseBodyProfileInfoProvince extends $dara.Model {
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

export class QueryAccountAddressInfoWithoutHavanaResponseBodyProfileInfo extends $dara.Model {
  accountAttr?: string;
  address?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  address5?: string;
  address6?: string;
  city?: QueryAccountAddressInfoWithoutHavanaResponseBodyProfileInfoCity;
  havanaId?: string;
  postCode?: string;
  province?: QueryAccountAddressInfoWithoutHavanaResponseBodyProfileInfoProvince;
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
      havanaId: 'HavanaId',
      postCode: 'PostCode',
      province: 'Province',
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
      city: QueryAccountAddressInfoWithoutHavanaResponseBodyProfileInfoCity,
      havanaId: 'string',
      postCode: 'string',
      province: QueryAccountAddressInfoWithoutHavanaResponseBodyProfileInfoProvince,
      trueName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.city && typeof (this.city as any).validate === 'function') {
      (this.city as any).validate();
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

export class QueryAccountAddressInfoWithoutHavanaResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  profileInfo?: QueryAccountAddressInfoWithoutHavanaResponseBodyProfileInfo;
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
      profileInfo: QueryAccountAddressInfoWithoutHavanaResponseBodyProfileInfo,
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

