// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResultDataImages extends $dara.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResultDataMetadata extends $dara.Model {
  averageSpend?: string;
  businessArea?: string;
  dailyOpeningHours?: string;
  mainTag?: string;
  phone?: string;
  score?: string;
  weeklyOpeningDays?: string;
  static names(): { [key: string]: string } {
    return {
      averageSpend: 'averageSpend',
      businessArea: 'businessArea',
      dailyOpeningHours: 'dailyOpeningHours',
      mainTag: 'mainTag',
      phone: 'phone',
      score: 'score',
      weeklyOpeningDays: 'weeklyOpeningDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageSpend: 'string',
      businessArea: 'string',
      dailyOpeningHours: 'string',
      mainTag: 'string',
      phone: 'string',
      score: 'string',
      weeklyOpeningDays: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResultData extends $dara.Model {
  address?: string;
  cityCode?: string;
  cityName?: string;
  distanceMeter?: string;
  districtCode?: string;
  districtName?: string;
  id?: string;
  images?: QueryResultDataImages[];
  latitude?: string;
  longitude?: string;
  metadata?: QueryResultDataMetadata;
  name?: string;
  provinceCode?: string;
  provinceName?: string;
  typeCode?: string;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityCode: 'cityCode',
      cityName: 'cityName',
      distanceMeter: 'distanceMeter',
      districtCode: 'districtCode',
      districtName: 'districtName',
      id: 'id',
      images: 'images',
      latitude: 'latitude',
      longitude: 'longitude',
      metadata: 'metadata',
      name: 'name',
      provinceCode: 'provinceCode',
      provinceName: 'provinceName',
      typeCode: 'typeCode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityCode: 'string',
      cityName: 'string',
      distanceMeter: 'string',
      districtCode: 'string',
      districtName: 'string',
      id: 'string',
      images: { 'type': 'array', 'itemType': QueryResultDataImages },
      latitude: 'string',
      longitude: 'string',
      metadata: QueryResultDataMetadata,
      name: 'string',
      provinceCode: 'string',
      provinceName: 'string',
      typeCode: 'string',
      types: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResult extends $dara.Model {
  data?: QueryResultData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryResultData },
      requestId: 'string',
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

