// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecifications } from "./DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecifications";


export class DescribeAvailableZoneResponseBodyDataAvailableZones extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  channel?: string;
  /**
   * @example
   * x86
   */
  cpuArch?: string;
  /**
   * @example
   * multiple
   */
  deployType?: string;
  /**
   * @example
   * cluster
   */
  instanceType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * normal
   */
  series?: string;
  supportSpecifications?: DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecifications[];
  /**
   * @example
   * cn-hangzhou-h,cn-hangzhou-i,cn-hangzhou-j
   */
  zones?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      cpuArch: 'CpuArch',
      deployType: 'DeployType',
      instanceType: 'InstanceType',
      region: 'Region',
      series: 'Series',
      supportSpecifications: 'SupportSpecifications',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      cpuArch: 'string',
      deployType: 'string',
      instanceType: 'string',
      region: 'string',
      series: 'string',
      supportSpecifications: { 'type': 'array', 'itemType': DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecifications },
      zones: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportSpecifications)) {
      $dara.Model.validateArray(this.supportSpecifications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

