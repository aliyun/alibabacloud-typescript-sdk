// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourceControlRequest extends $dara.Model {
  /**
   * @remarks
   * The updated maximum number of CPU cores. The minimum value is 1, and the maximum value is determined by the resource_control_cpu_count_limit kernel parameter of the cluster. You must specify exactly one of the MaxCpu and CpuCount parameters.
   * 
   * @example
   * 8
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
   * The updated maximum CPU quota percentage. Valid values: 1 to 100. You must specify exactly one of the MaxCpu and CpuCount parameters.
   * 
   * @example
   * 30
   */
  maxCpu?: number;
  /**
   * @remarks
   * The ID of the region where the PolarDB cluster is deployed.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
   * 
   * @example
   * cn-hangzhou
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

