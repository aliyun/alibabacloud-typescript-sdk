// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceControlRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of CPU cores that the resource control rule can use. The minimum value is 1. The maximum value is determined by the cluster kernel parameter resource_control_cpu_count_limit. You must specify one and only one of this parameter and MaxCpu.
   * 
   * @example
   * 4
   */
  cpuCount?: number;
  /**
   * @remarks
   * The PolarDB cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The maximum CPU quota percentage that the resource control rule can use. Valid values: 1 to 100. You must specify one and only one of this parameter and CpuCount.
   * 
   * @example
   * 20
   */
  maxCpu?: number;
  /**
   * @remarks
   * The region ID of the PolarDB cluster.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the resource control rule. The name must be 1 to 63 ASCII bytes in length, start with a letter, and can contain only letters, digits, and underscores.
   * 
   * This parameter is required.
   * 
   * @example
   * test_rc
   */
  resourceControlName?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      DBClusterId: 'DBClusterId',
      maxCpu: 'MaxCpu',
      regionId: 'RegionId',
      resourceControlName: 'ResourceControlName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      DBClusterId: 'string',
      maxCpu: 'number',
      regionId: 'string',
      resourceControlName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

