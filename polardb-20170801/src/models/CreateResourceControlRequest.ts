// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceControlRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of CPU cores that the resource control rule can use. The minimum value is 1, and the maximum value is determined by the resource_control_cpu_count_limit kernel parameter of the cluster. You must specify exactly one of the MaxCpu and CpuCount parameters.
   * 
   * @example
   * 4
   */
  cpuCount?: number;
  /**
   * @remarks
   * The ID of the PolarDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The maximum CPU quota percentage that the resource control rule can use. Valid values: 1 to 100. You must specify exactly one of the MaxCpu and CpuCount parameters.
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
   * The name of the resource control rule. The name must be 1 to 63 ASCII characters in length, start with a letter, and contain only letters, digits, and underscores.
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

