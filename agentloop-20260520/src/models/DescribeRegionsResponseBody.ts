// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * agentloop.cn-hangzhou.aliyuncs.com
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * 华东1（杭州）
   */
  localName?: string;
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
   * The internal endpoint.
   * 
   * @example
   * agentloop.cn-hangzhou.aliyuncs.com
   */
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
  /**
   * @remarks
   * The maximum number of entries returned per request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If no more pages are available, this parameter is empty.
   * 
   * @example
   * ydx438PDAW1lYRJZbBn9
   */
  nextToken?: string;
  /**
   * @remarks
   * The region information.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FDD8668-516C-5183-9BCF-4CAD8E3CF327
   */
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

