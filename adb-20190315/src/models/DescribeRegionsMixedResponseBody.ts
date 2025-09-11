// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsMixedResponseBodyRegionsRegion extends $dara.Model {
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
   * The version of the cluster.
   * 
   * Valid values:
   * 
   * *   2.0
   * *   3.0
   * 
   * @example
   * 3.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsMixedResponseBodyRegions extends $dara.Model {
  region?: DescribeRegionsMixedResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsMixedResponseBodyRegionsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsMixedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried regions.
   */
  regions?: DescribeRegionsMixedResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2E9450FF-F8AD-54C6-B3C3-009FBD7C0700
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsMixedResponseBodyRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

