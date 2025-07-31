// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskRegionResponseBodyRegionList extends $dara.Model {
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

export class DescribeActiveOperationTaskRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   */
  regionList?: DescribeActiveOperationTaskRegionResponseBodyRegionList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C4A2494-XXXX-XXXX-93CF-548DB3375193
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionList: 'RegionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionList: { 'type': 'array', 'itemType': DescribeActiveOperationTaskRegionResponseBodyRegionList },
      requestId: 'string',
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

