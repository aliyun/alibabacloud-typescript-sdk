// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAnycastServerRegionsResponseBodyAnycastServerRegionList extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * eu-west-1-gb33-a01
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnycastServerRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of regions where you can associate Anycast EIPs with endpoints.
   */
  anycastServerRegionList?: DescribeAnycastServerRegionsResponseBodyAnycastServerRegionList[];
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      anycastServerRegionList: 'AnycastServerRegionList',
      count: 'Count',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastServerRegionList: { 'type': 'array', 'itemType': DescribeAnycastServerRegionsResponseBodyAnycastServerRegionList },
      count: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.anycastServerRegionList)) {
      $dara.Model.validateArray(this.anycastServerRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

