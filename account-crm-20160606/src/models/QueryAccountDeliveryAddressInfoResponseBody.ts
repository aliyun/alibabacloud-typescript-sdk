// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountDeliveryAddressInfoResponseBodyDataAreaDivision extends $dara.Model {
  divisionAbbName?: string;
  divisionId?: number;
  divisionLevel?: number;
  divisionName?: string;
  divisionTname?: string;
  newDivisionId?: number;
  parentId?: number;
  pinyin?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      divisionAbbName: 'DivisionAbbName',
      divisionId: 'DivisionId',
      divisionLevel: 'DivisionLevel',
      divisionName: 'DivisionName',
      divisionTname: 'DivisionTname',
      newDivisionId: 'NewDivisionId',
      parentId: 'ParentId',
      pinyin: 'Pinyin',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionAbbName: 'string',
      divisionId: 'number',
      divisionLevel: 'number',
      divisionName: 'string',
      divisionTname: 'string',
      newDivisionId: 'number',
      parentId: 'number',
      pinyin: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountDeliveryAddressInfoResponseBodyDataCityDivision extends $dara.Model {
  divisionAbbName?: string;
  divisionId?: number;
  divisionLevel?: number;
  divisionName?: string;
  divisionTname?: string;
  newDivisionId?: number;
  parentId?: number;
  pinyin?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      divisionAbbName: 'DivisionAbbName',
      divisionId: 'DivisionId',
      divisionLevel: 'DivisionLevel',
      divisionName: 'DivisionName',
      divisionTname: 'DivisionTname',
      newDivisionId: 'NewDivisionId',
      parentId: 'ParentId',
      pinyin: 'Pinyin',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionAbbName: 'string',
      divisionId: 'number',
      divisionLevel: 'number',
      divisionName: 'string',
      divisionTname: 'string',
      newDivisionId: 'number',
      parentId: 'number',
      pinyin: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountDeliveryAddressInfoResponseBodyDataProviceDivision extends $dara.Model {
  divisionAbbName?: string;
  divisionId?: number;
  divisionLevel?: number;
  divisionName?: string;
  divisionTname?: string;
  newDivisionId?: number;
  parentId?: number;
  pinyin?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      divisionAbbName: 'DivisionAbbName',
      divisionId: 'DivisionId',
      divisionLevel: 'DivisionLevel',
      divisionName: 'DivisionName',
      divisionTname: 'DivisionTname',
      newDivisionId: 'NewDivisionId',
      parentId: 'ParentId',
      pinyin: 'Pinyin',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionAbbName: 'string',
      divisionId: 'number',
      divisionLevel: 'number',
      divisionName: 'string',
      divisionTname: 'string',
      newDivisionId: 'number',
      parentId: 'number',
      pinyin: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountDeliveryAddressInfoResponseBodyDataTownDivision extends $dara.Model {
  divisionAbbName?: string;
  divisionId?: number;
  divisionLevel?: number;
  divisionName?: string;
  divisionTname?: string;
  newDivisionId?: number;
  parentId?: number;
  pinyin?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      divisionAbbName: 'DivisionAbbName',
      divisionId: 'DivisionId',
      divisionLevel: 'DivisionLevel',
      divisionName: 'DivisionName',
      divisionTname: 'DivisionTname',
      newDivisionId: 'NewDivisionId',
      parentId: 'ParentId',
      pinyin: 'Pinyin',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionAbbName: 'string',
      divisionId: 'number',
      divisionLevel: 'number',
      divisionName: 'string',
      divisionTname: 'string',
      newDivisionId: 'number',
      parentId: 'number',
      pinyin: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountDeliveryAddressInfoResponseBodyData extends $dara.Model {
  address?: string;
  areaDivision?: QueryAccountDeliveryAddressInfoResponseBodyDataAreaDivision;
  areaId?: string;
  cityDivision?: QueryAccountDeliveryAddressInfoResponseBodyDataCityDivision;
  cityId?: string;
  contacts?: string;
  defaultAddress?: boolean;
  email?: string;
  mobile?: string;
  phone?: string;
  pk?: string;
  postalcode?: string;
  proviceDivision?: QueryAccountDeliveryAddressInfoResponseBodyDataProviceDivision;
  proviceId?: string;
  townDivision?: QueryAccountDeliveryAddressInfoResponseBodyDataTownDivision;
  townId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      areaDivision: 'AreaDivision',
      areaId: 'AreaId',
      cityDivision: 'CityDivision',
      cityId: 'CityId',
      contacts: 'Contacts',
      defaultAddress: 'DefaultAddress',
      email: 'Email',
      mobile: 'Mobile',
      phone: 'Phone',
      pk: 'Pk',
      postalcode: 'Postalcode',
      proviceDivision: 'ProviceDivision',
      proviceId: 'ProviceId',
      townDivision: 'TownDivision',
      townId: 'TownId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      areaDivision: QueryAccountDeliveryAddressInfoResponseBodyDataAreaDivision,
      areaId: 'string',
      cityDivision: QueryAccountDeliveryAddressInfoResponseBodyDataCityDivision,
      cityId: 'string',
      contacts: 'string',
      defaultAddress: 'boolean',
      email: 'string',
      mobile: 'string',
      phone: 'string',
      pk: 'string',
      postalcode: 'string',
      proviceDivision: QueryAccountDeliveryAddressInfoResponseBodyDataProviceDivision,
      proviceId: 'string',
      townDivision: QueryAccountDeliveryAddressInfoResponseBodyDataTownDivision,
      townId: 'string',
    };
  }

  validate() {
    if(this.areaDivision && typeof (this.areaDivision as any).validate === 'function') {
      (this.areaDivision as any).validate();
    }
    if(this.cityDivision && typeof (this.cityDivision as any).validate === 'function') {
      (this.cityDivision as any).validate();
    }
    if(this.proviceDivision && typeof (this.proviceDivision as any).validate === 'function') {
      (this.proviceDivision as any).validate();
    }
    if(this.townDivision && typeof (this.townDivision as any).validate === 'function') {
      (this.townDivision as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountDeliveryAddressInfoResponseBody extends $dara.Model {
  code?: string;
  data?: QueryAccountDeliveryAddressInfoResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryAccountDeliveryAddressInfoResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

