// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions extends $dara.Model {
  /**
   * @remarks
   * The code of the region.
   * 
   * @example
   * NorthEastChina
   */
  area?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * NorthChina
   */
  enName?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-dalian-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Dalian Unicom
   */
  name?: string;
  /**
   * @remarks
   * The province where the node is deployed.
   * 
   * @example
   * Liaoning Province
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      enName: 'EnName',
      ensRegionId: 'EnsRegionId',
      name: 'Name',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      enName: 'string',
      ensRegionId: 'string',
      name: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponseBodyEnsRegions extends $dara.Model {
  ensRegions?: DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions[];
  static names(): { [key: string]: string } {
    return {
      ensRegions: 'EnsRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegions: { 'type': 'array', 'itemType': DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions },
    };
  }

  validate() {
    if(Array.isArray(this.ensRegions)) {
      $dara.Model.validateArray(this.ensRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service code. 0 is returned for a successful request. An error code is returned for a failed request.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The information about the regions.
   */
  ensRegions?: DescribeEnsRegionsResponseBodyEnsRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ensRegions: 'EnsRegions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ensRegions: DescribeEnsRegionsResponseBodyEnsRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ensRegions && typeof (this.ensRegions as any).validate === 'function') {
      (this.ensRegions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

