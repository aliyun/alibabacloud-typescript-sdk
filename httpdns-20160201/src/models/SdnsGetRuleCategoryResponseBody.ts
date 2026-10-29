// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdnsGetRuleCategoryResponseBodyDataRecordLinePaths extends $dara.Model {
  /**
   * @example
   * chinanet
   */
  id?: string;
  /**
   * @example
   * isps
   */
  key?: string;
  /**
   * @example
   * 电信
   */
  label?: string;
  /**
   * @example
   * 1
   */
  level?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      label: 'Label',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      label: 'string',
      level: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsGetRuleCategoryResponseBodyDataRecordLine extends $dara.Model {
  /**
   * @example
   * internal
   */
  lineId?: string;
  /**
   * @example
   * 中国地区
   */
  lineLabel?: string;
  paths?: SdnsGetRuleCategoryResponseBodyDataRecordLinePaths[];
  static names(): { [key: string]: string } {
    return {
      lineId: 'LineId',
      lineLabel: 'LineLabel',
      paths: 'Paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineId: 'string',
      lineLabel: 'string',
      paths: { 'type': 'array', 'itemType': SdnsGetRuleCategoryResponseBodyDataRecordLinePaths },
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsGetRuleCategoryResponseBodyDataRegionArea extends $dara.Model {
  /**
   * @example
   * huadong
   */
  id?: string;
  /**
   * @example
   * 华东
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsGetRuleCategoryResponseBodyDataRegionCity extends $dara.Model {
  /**
   * @example
   * "x"
   */
  id?: string;
  /**
   * @example
   * ""
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsGetRuleCategoryResponseBodyDataRegionContinent extends $dara.Model {
  /**
   * @example
   * cn
   */
  id?: string;
  /**
   * @example
   * 亚洲
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsGetRuleCategoryResponseBodyDataRegionCountry extends $dara.Model {
  /**
   * @example
   * cn
   */
  id?: string;
  /**
   * @example
   * 中国大陆
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsGetRuleCategoryResponseBodyDataRegionIsp extends $dara.Model {
  /**
   * @example
   * chinanet
   */
  id?: string;
  /**
   * @example
   * 电信
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsGetRuleCategoryResponseBodyDataRegionProvince extends $dara.Model {
  /**
   * @example
   * zhejiang
   */
  id?: string;
  /**
   * @example
   * 浙江
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsGetRuleCategoryResponseBodyDataRegion extends $dara.Model {
  area?: SdnsGetRuleCategoryResponseBodyDataRegionArea;
  city?: SdnsGetRuleCategoryResponseBodyDataRegionCity;
  continent?: SdnsGetRuleCategoryResponseBodyDataRegionContinent;
  country?: SdnsGetRuleCategoryResponseBodyDataRegionCountry;
  isp?: SdnsGetRuleCategoryResponseBodyDataRegionIsp;
  province?: SdnsGetRuleCategoryResponseBodyDataRegionProvince;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      city: 'City',
      continent: 'Continent',
      country: 'Country',
      isp: 'Isp',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: SdnsGetRuleCategoryResponseBodyDataRegionArea,
      city: SdnsGetRuleCategoryResponseBodyDataRegionCity,
      continent: SdnsGetRuleCategoryResponseBodyDataRegionContinent,
      country: SdnsGetRuleCategoryResponseBodyDataRegionCountry,
      isp: SdnsGetRuleCategoryResponseBodyDataRegionIsp,
      province: SdnsGetRuleCategoryResponseBodyDataRegionProvince,
    };
  }

  validate() {
    if(this.area && typeof (this.area as any).validate === 'function') {
      (this.area as any).validate();
    }
    if(this.city && typeof (this.city as any).validate === 'function') {
      (this.city as any).validate();
    }
    if(this.continent && typeof (this.continent as any).validate === 'function') {
      (this.continent as any).validate();
    }
    if(this.country && typeof (this.country as any).validate === 'function') {
      (this.country as any).validate();
    }
    if(this.isp && typeof (this.isp as any).validate === 'function') {
      (this.isp as any).validate();
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

export class SdnsGetRuleCategoryResponseBodyDataRulesRecords extends $dara.Model {
  /**
   * @example
   * 192.0.2.200
   */
  ip?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * A
   */
  typeLabel?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      type: 'Type',
      typeLabel: 'TypeLabel',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      type: 'number',
      typeLabel: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsGetRuleCategoryResponseBodyDataRules extends $dara.Model {
  argKeys?: string[];
  args?: { [key: string]: string };
  /**
   * @example
   * 默认规则
   */
  name?: string;
  records?: SdnsGetRuleCategoryResponseBodyDataRulesRecords[];
  /**
   * @example
   * 0
   */
  resultMode?: number;
  /**
   * @example
   * 60
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      argKeys: 'ArgKeys',
      args: 'Args',
      name: 'Name',
      records: 'Records',
      resultMode: 'ResultMode',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argKeys: { 'type': 'array', 'itemType': 'string' },
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      records: { 'type': 'array', 'itemType': SdnsGetRuleCategoryResponseBodyDataRulesRecords },
      resultMode: 'number',
      ttl: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.argKeys)) {
      $dara.Model.validateArray(this.argKeys);
    }
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsGetRuleCategoryResponseBodyData extends $dara.Model {
  clientIpRanges?: string[];
  /**
   * @example
   * api.example.com
   */
  domainName?: string;
  /**
   * @example
   * 123456789012345678
   */
  id?: string;
  /**
   * @example
   * IP_RANGE
   */
  matchType?: string;
  recordLine?: SdnsGetRuleCategoryResponseBodyDataRecordLine;
  region?: SdnsGetRuleCategoryResponseBodyDataRegion;
  rules?: SdnsGetRuleCategoryResponseBodyDataRules[];
  /**
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      clientIpRanges: 'ClientIpRanges',
      domainName: 'DomainName',
      id: 'Id',
      matchType: 'MatchType',
      recordLine: 'RecordLine',
      region: 'Region',
      rules: 'Rules',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpRanges: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      id: 'string',
      matchType: 'string',
      recordLine: SdnsGetRuleCategoryResponseBodyDataRecordLine,
      region: SdnsGetRuleCategoryResponseBodyDataRegion,
      rules: { 'type': 'array', 'itemType': SdnsGetRuleCategoryResponseBodyDataRules },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clientIpRanges)) {
      $dara.Model.validateArray(this.clientIpRanges);
    }
    if(this.recordLine && typeof (this.recordLine as any).validate === 'function') {
      (this.recordLine as any).validate();
    }
    if(this.region && typeof (this.region as any).validate === 'function') {
      (this.region as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SdnsGetRuleCategoryResponseBody extends $dara.Model {
  data?: SdnsGetRuleCategoryResponseBodyData;
  /**
   * @example
   * 50F9C40E-188D-4208-BE2C-74271337****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SdnsGetRuleCategoryResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

