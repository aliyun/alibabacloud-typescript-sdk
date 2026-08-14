// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigsRegionList extends $dara.Model {
  block?: number;
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
  domain?: string;
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
  areaBlockConfigs?: DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigs[];
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

