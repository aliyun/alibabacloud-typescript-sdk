// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The supported data redundancy types.
   */
  dataRedundancyType?: string[];
  /**
   * @remarks
   * The accelerated endpoint of the region.
   */
  internalEndpoint?: string;
  /**
   * @remarks
   * The public endpoint of the region.
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The intranet endpoint of the region.
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The display name of the region.
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the region.
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      dataRedundancyType: 'dataRedundancyType',
      internalEndpoint: 'internalEndpoint',
      internetEndpoint: 'internetEndpoint',
      intranetEndpoint: 'intranetEndpoint',
      localName: 'localName',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataRedundancyType: { 'type': 'array', 'itemType': 'string' },
      internalEndpoint: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      localName: 'string',
      region: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataRedundancyType)) {
      $dara.Model.validateArray(this.dataRedundancyType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of available regions and their details.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      regions: 'regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

