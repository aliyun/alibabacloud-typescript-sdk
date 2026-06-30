// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableAccelerateAreasResponseBodyAreasRegionList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the region is in the Chinese mainland. Valid values:
   * 
   * - **true**: The region is in the Chinese mainland.
   * 
   * - **false**: The region is not in the Chinese mainland.
   * 
   * @example
   * true
   */
  chinaMainland?: boolean;
  /**
   * @remarks
   * The line type of the public IP address in the acceleration region.
   * 
   * - **BGP** (default): BGP (Multi-ISP) line.
   * 
   * - **BGP_PRO**: BGP (Multi-ISP) Pro line.
   */
  ispTypeList?: string[];
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Qingdao)
   */
  localName?: string;
  /**
   * @remarks
   * Indicates whether multi-zone deployment is supported. Valid values:
   * 
   * - **true**: Multi-zone deployment is supported.
   * 
   * - **false**: Multi-zone deployment is not supported.
   * 
   * @example
   * true
   */
  multiAz?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether IPv6 is supported. Valid values:
   * 
   * - **true**: IPv6 is supported.
   * 
   * - **false**: IPv6 is not supported.
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
   * The ID of the area.
   * 
   * @example
   * cn-huabei
   */
  areaId?: string;
  /**
   * @remarks
   * The name of the area.
   * 
   * @example
   * China North
   */
  localName?: string;
  /**
   * @remarks
   * The list of regions.
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
   * The list of areas.
   */
  areas?: ListAvailableAccelerateAreasResponseBodyAreas[];
  /**
   * @remarks
   * The request ID.
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

