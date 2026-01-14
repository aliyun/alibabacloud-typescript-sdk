// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableAccelerateAreasResponseBodyAreasRegionList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the region is in the Chinese mainland. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  chinaMainland?: boolean;
  /**
   * @remarks
   * The line type of the elastic IP address (EIP) in the acceleration region. Valid values:
   * 
   * *   **BGP**: BGP (Multi-ISP) lines.
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro lines.
   */
  ispTypeList?: string[];
  /**
   * @remarks
   * The acceleration region name.
   * 
   * @example
   * China (Qingdao)
   */
  localName?: string;
  /**
   * @remarks
   * Indicates whether multiple zones are supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  multiAz?: boolean;
  /**
   * @remarks
   * The ID of the acceleration region.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether IPv6 is supported. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  supportIpv6?: boolean;
  static names(): { [key: string]: string } {
    return {
      chinaMainland: 'ChinaMainland',
      ispTypeList: 'IspTypeList',
      localName: 'LocalName',
      multiAz: 'MultiAz',
      regionId: 'RegionId',
      supportIpv6: 'SupportIpv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chinaMainland: 'boolean',
      ispTypeList: { 'type': 'array', 'itemType': 'string' },
      localName: 'string',
      multiAz: 'boolean',
      regionId: 'string',
      supportIpv6: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.ispTypeList)) {
      $dara.Model.validateArray(this.ispTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableAccelerateAreasResponseBodyAreas extends $dara.Model {
  /**
   * @remarks
   * The ID of the acceleration area.
   * 
   * @example
   * cn-huabei
   */
  areaId?: string;
  /**
   * @remarks
   * The acceleration area name.
   * 
   * @example
   * North China
   */
  localName?: string;
  /**
   * @remarks
   * The information about acceleration regions.
   */
  regionList?: ListAvailableAccelerateAreasResponseBodyAreasRegionList[];
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      localName: 'LocalName',
      regionList: 'RegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      localName: 'string',
      regionList: { 'type': 'array', 'itemType': ListAvailableAccelerateAreasResponseBodyAreasRegionList },
    };
  }

  validate() {
    if(Array.isArray(this.regionList)) {
      $dara.Model.validateArray(this.regionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableAccelerateAreasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about acceleration areas.
   */
  areas?: ListAvailableAccelerateAreasResponseBodyAreas[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A9B4E54C-9CCD-4002-91A9-D38C6C209192
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areas: 'Areas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areas: { 'type': 'array', 'itemType': ListAvailableAccelerateAreasResponseBodyAreas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.areas)) {
      $dara.Model.validateArray(this.areas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

