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

