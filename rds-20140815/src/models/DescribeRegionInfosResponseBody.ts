// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionInfosResponseBodyRegionsRDSRegion extends $dara.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeRegionInfosResponseBodyRegions extends $dara.Model {
  RDSRegion?: DescribeRegionInfosResponseBodyRegionsRDSRegion[];
  static names(): { [key: string]: string } {
    return {
      RDSRegion: 'RDSRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RDSRegion: { 'type': 'array', 'itemType': DescribeRegionInfosResponseBodyRegionsRDSRegion },
    };
  }

  validate() {
    if(Array.isArray(this.RDSRegion)) {
      $dara.Model.validateArray(this.RDSRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionInfosResponseBody extends $dara.Model {
  regions?: DescribeRegionInfosResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionInfosResponseBodyRegions,
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

