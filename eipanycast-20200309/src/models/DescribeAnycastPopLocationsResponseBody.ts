// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAnycastPopLocationsResponseBodyAnycastPopLocationList extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the access point is deployed.
   * 
   * @example
   * us-west-1-pop
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region where the access point is deployed.
   * 
   * @example
   * us-west-1-pop
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

export class DescribeAnycastPopLocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of access points in the specified access area.
   */
  anycastPopLocationList?: DescribeAnycastPopLocationsResponseBodyAnycastPopLocationList[];
  /**
   * @remarks
   * The number of access points.
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
      anycastPopLocationList: 'AnycastPopLocationList',
      count: 'Count',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastPopLocationList: { 'type': 'array', 'itemType': DescribeAnycastPopLocationsResponseBodyAnycastPopLocationList },
      count: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.anycastPopLocationList)) {
      $dara.Model.validateArray(this.anycastPopLocationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

