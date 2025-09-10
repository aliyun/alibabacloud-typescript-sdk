// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The public endpoint of Simple Log Service.
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint of Simple Log Service.
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The name of the Simple Log Service region.
   */
  localName?: string;
  /**
   * @remarks
   * SLS region
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      internetEndpoint: 'internetEndpoint',
      intranetEndpoint: 'intranetEndpoint',
      localName: 'localName',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      localName: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
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

