// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigsRegionList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the location is blocked. Valid values:
   * 
   * *   **0**: yes
   * *   **1**: no
   * 
   * @example
   * 0
   */
  block?: number;
  /**
   * @remarks
   * The name of the location.
   * 
   * @example
   * CN-SHANGHAI
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'number',
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

export class DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigs extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The configuration of the blocked locations.
   */
  regionList?: DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigsRegionList[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      regionList: 'RegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      regionList: { 'type': 'array', 'itemType': DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigsRegionList },
    };
  }

  validate() {
    if(Array.isArray(this.regionList)) {
      $dara.Model.validateArray(this.regionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAreaBlockConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the configurations of the Location Blacklist (Domain Names) policy.
   */
  areaBlockConfigs?: DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areaBlockConfigs: 'AreaBlockConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaBlockConfigs: { 'type': 'array', 'itemType': DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.areaBlockConfigs)) {
      $dara.Model.validateArray(this.areaBlockConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

