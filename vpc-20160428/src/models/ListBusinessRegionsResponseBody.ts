// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBusinessRegionsResponseBodyGeographicSubRegions extends $dara.Model {
  /**
   * @remarks
   * The name of the region where circuits are available.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where circuits are available.
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
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of regions available for Express Connect circuits.
   */
  geographicSubRegions?: ListBusinessRegionsResponseBodyGeographicSubRegions[];
  /**
   * @remarks
   * The ID of the request.
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

