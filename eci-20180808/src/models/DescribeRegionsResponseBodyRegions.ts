// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The list of recommended zones.
   */
  recommendZones?: string[];
  /**
   * @remarks
   * The endpoint for the region.
   * 
   * @example
   * eci.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of unavailable zones.
   */
  unavailableZones?: string[];
  /**
   * @remarks
   * The queried zones.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      recommendZones: 'RecommendZones',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      unavailableZones: 'UnavailableZones',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendZones: { 'type': 'array', 'itemType': 'string' },
      regionEndpoint: 'string',
      regionId: 'string',
      unavailableZones: { 'type': 'array', 'itemType': 'string' },
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.recommendZones)) {
      $dara.Model.validateArray(this.recommendZones);
    }
    if(Array.isArray(this.unavailableZones)) {
      $dara.Model.validateArray(this.unavailableZones);
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

