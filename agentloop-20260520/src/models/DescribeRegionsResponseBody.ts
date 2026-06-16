// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  internetEndpoint?: string;
  localName?: string;
  regionId?: string;
  vpcEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      internetEndpoint: 'internetEndpoint',
      localName: 'localName',
      regionId: 'regionId',
      vpcEndpoint: 'vpcEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetEndpoint: 'string',
      localName: 'string',
      regionId: 'string',
      vpcEndpoint: 'string',
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
  maxResults?: number;
  nextToken?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      regions: 'regions',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
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

