// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegionsRegion extends $dara.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Shenzhen)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the service for the region.
   * 
   * @example
   * apigateway.cn-shenzhen.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
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

