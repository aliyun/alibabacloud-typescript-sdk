// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource extends $dara.Model {
  /**
   * @remarks
   * The region. Set the value to West.
   * 
   * @example
   * West
   */
  area?: string;
  /**
   * @remarks
   * The code of the region.
   * 
   * @example
   * 300100
   */
  areaCode?: string;
  /**
   * @remarks
   * The date when the transaction was processed.
   * 
   * @example
   * 2019-10-30
   */
  bizDate?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-hangzhou-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Nanjing Mobile
   */
  ensRegionIdName?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 10
   */
  instanceCount?: number;
  /**
   * @remarks
   * The public bandwidth of the instance. Unit: Bits/s.
   * 
   * @example
   * 100
   */
  internetBandwidth?: number;
  /**
   * @remarks
   * The ISP. Valid values:
   * 
   * *   cmcc: China Mobile
   * *   unicom: China Unicom
   * *   telecom: China Telecom
   * *   multiCarrier: multi-line ISP
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 10
   */
  VCpu?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      areaCode: 'AreaCode',
      bizDate: 'BizDate',
      ensRegionId: 'EnsRegionId',
      ensRegionIdName: 'EnsRegionIdName',
      instanceCount: 'InstanceCount',
      internetBandwidth: 'InternetBandwidth',
      isp: 'Isp',
      VCpu: 'VCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      areaCode: 'string',
      bizDate: 'string',
      ensRegionId: 'string',
      ensRegionIdName: 'string',
      instanceCount: 'number',
      internetBandwidth: 'number',
      isp: 'string',
      VCpu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources extends $dara.Model {
  ensRegionIdResource?: DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource[];
  static names(): { [key: string]: string } {
    return {
      ensRegionIdResource: 'EnsRegionIdResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdResource: { 'type': 'array', 'itemType': DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource },
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionIdResource)) {
      $dara.Model.validateArray(this.ensRegionIdResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data. For more information, see EnsRegionIdResources in sample JSON responses.
   */
  ensRegionIdResources?: DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 476600B1-C9E2-4245-A26F-DC7EA8071425
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried nodes.
   * 
   * @example
   * 58
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ensRegionIdResources: 'EnsRegionIdResources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdResources: DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ensRegionIdResources && typeof (this.ensRegionIdResources as any).validate === 'function') {
      (this.ensRegionIdResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

