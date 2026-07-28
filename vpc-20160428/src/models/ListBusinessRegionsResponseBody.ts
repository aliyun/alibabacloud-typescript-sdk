// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBusinessRegionsResponseBodyGeographicSubRegions extends $dara.Model {
  /**
   * @remarks
   * The name of the region where Express Connect circuits are available for purchase.
   * 
   * @example
   * 华东1(杭州)
   */
  name?: string;
  /**
   * @remarks
   * The region ID where Express Connect circuits are available for purchase.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class ListBusinessRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of regions where Express Connect circuits are available for purchase.
   */
  geographicSubRegions?: ListBusinessRegionsResponseBodyGeographicSubRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 304FE68E-16D8-5B90-B2B3-FE5C5C08C24B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      geographicSubRegions: 'GeographicSubRegions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      geographicSubRegions: { 'type': 'array', 'itemType': ListBusinessRegionsResponseBodyGeographicSubRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.geographicSubRegions)) {
      $dara.Model.validateArray(this.geographicSubRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

