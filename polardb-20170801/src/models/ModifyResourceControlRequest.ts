// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourceControlRequest extends $dara.Model {
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 4
   */
  cpuCount?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The maximum number of CPUs. Unit: 0.001 CPU. A value of 1000 indicates one CPU. If you specify this parameter, instances whose CPU count is less than the specified value are returned.
   * 
   * @example
   * 1000000
   */
  maxCpu?: number;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource control name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-rc
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

