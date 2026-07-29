// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourceControlRequest extends $dara.Model {
  /**
   * @remarks
   * The modified maximum number of CPU cores. The minimum value is 1. The maximum value is determined by the cluster kernel parameter resource_control_cpu_count_limit. You must specify one and only one of this parameter and MaxCpu.
   * 
   * @example
   * 8
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
   * The modified maximum CPU quota percentage. Valid values: 1 to 100. You must specify one and only one of this parameter and CpuCount.
   * 
   * @example
   * 30
   */
  maxCpu?: number;
  /**
   * @remarks
   * The region ID of the PolarDB cluster.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
   * 
   * @example
   * cn-hangzhou
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

