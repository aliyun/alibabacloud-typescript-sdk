// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommonAreasResponseBodyAreasRegionList extends $dara.Model {
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * China (Qingdao)
   */
  localName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonAreasResponseBodyAreas extends $dara.Model {
  /**
   * @remarks
   * The area ID.
   * 
   * @example
   * cn-huabei
   */
  areaId?: string;
  /**
   * @remarks
   * The area name.
   * 
   * @example
   * North China
   */
  localName?: string;
  /**
   * @remarks
   * The information about the regions.
   */
  regionList?: ListCommonAreasResponseBodyAreasRegionList[];
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
      regionList: { 'type': 'array', 'itemType': ListCommonAreasResponseBodyAreasRegionList },
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

export class ListCommonAreasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the areas.
   */
  areas?: ListCommonAreasResponseBodyAreas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
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
      areas: { 'type': 'array', 'itemType': ListCommonAreasResponseBodyAreas },
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

