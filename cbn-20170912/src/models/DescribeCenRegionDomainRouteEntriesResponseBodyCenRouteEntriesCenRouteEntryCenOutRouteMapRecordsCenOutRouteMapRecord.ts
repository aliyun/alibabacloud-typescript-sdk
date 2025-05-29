// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecordsCenOutRouteMapRecord extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the routing policy is applied.
   * 
   * @example
   * ccn-cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * cenrmap-dbarzidzp7ek4k****
   */
  routeMapId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeMapId: 'RouteMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeMapId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

