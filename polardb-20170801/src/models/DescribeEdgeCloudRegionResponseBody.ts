// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEdgeCloudRegionResponseBodyEdgeCloudRegionsStandbyEdgeCloudRegionList extends $dara.Model {
  /**
   * @remarks
   * The ID of the standby edge cloud region.
   * 
   * @example
   * standbyEdgeCloudRegionId
   */
  standbyEdgeCloudRegionId?: string;
  /**
   * @remarks
   * The name of the standby edge cloud region.
   * 
   * @example
   * standbyEdgeCloudRegionName
   */
  standbyEdgeCloudRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      standbyEdgeCloudRegionId: 'StandbyEdgeCloudRegionId',
      standbyEdgeCloudRegionName: 'StandbyEdgeCloudRegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standbyEdgeCloudRegionId: 'string',
      standbyEdgeCloudRegionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeCloudRegionResponseBodyEdgeCloudRegions extends $dara.Model {
  /**
   * @remarks
   * The ID of the central control region corresponding to the edge cloud region.
   * 
   * @example
   * cn-beijing
   */
  centralControlRegionId?: string;
  /**
   * @remarks
   * The ID of the edge cloud region.
   * 
   * @example
   * sg-singapore
   */
  edgeCloudRegionId?: string;
  /**
   * @remarks
   * The name of the edge cloud region.
   * 
   * @example
   * edgeCloudRegionName
   */
  edgeCloudRegionName?: string;
  /**
   * @remarks
   * The list of standby edge cloud regions.
   */
  standbyEdgeCloudRegionList?: DescribeEdgeCloudRegionResponseBodyEdgeCloudRegionsStandbyEdgeCloudRegionList[];
  static names(): { [key: string]: string } {
    return {
      centralControlRegionId: 'CentralControlRegionId',
      edgeCloudRegionId: 'EdgeCloudRegionId',
      edgeCloudRegionName: 'EdgeCloudRegionName',
      standbyEdgeCloudRegionList: 'StandbyEdgeCloudRegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralControlRegionId: 'string',
      edgeCloudRegionId: 'string',
      edgeCloudRegionName: 'string',
      standbyEdgeCloudRegionList: { 'type': 'array', 'itemType': DescribeEdgeCloudRegionResponseBodyEdgeCloudRegionsStandbyEdgeCloudRegionList },
    };
  }

  validate() {
    if(Array.isArray(this.standbyEdgeCloudRegionList)) {
      $dara.Model.validateArray(this.standbyEdgeCloudRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdgeCloudRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of available edge cloud regions. When a whitelist is configured, only the regions available to the current account are returned.
   */
  edgeCloudRegions?: DescribeEdgeCloudRegionResponseBodyEdgeCloudRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      edgeCloudRegions: 'EdgeCloudRegions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeCloudRegions: { 'type': 'array', 'itemType': DescribeEdgeCloudRegionResponseBodyEdgeCloudRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.edgeCloudRegions)) {
      $dara.Model.validateArray(this.edgeCloudRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

