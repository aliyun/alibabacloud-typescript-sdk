// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesResponseBodyDataRegionConfigList extends $dara.Model {
  /**
   * @example
   * 4
   */
  cpuCount?: number;
  /**
   * @example
   * 4GiB
   */
  gpuSpec?: string;
  /**
   * @example
   * 8192
   */
  memorySize?: number;
  /**
   * @example
   * cn-beijing+dir-3040*****
   */
  officeSiteId?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * eds.enterprise_office.4c8g
   */
  resourceInstanceType?: string;
  /**
   * @example
   * sp-b9fasjuu0*****
   */
  snapshotPolicyId?: string;
  /**
   * @example
   * vsw-dgea1*****
   */
  subnetId?: string;
  /**
   * @example
   * false
   */
  volumeEncryptionEnable?: boolean;
  /**
   * @example
   * 3bc77be0-cbce-4a29-b07b-13f16394****
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      gpuSpec: 'GpuSpec',
      memorySize: 'MemorySize',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      resourceInstanceType: 'ResourceInstanceType',
      snapshotPolicyId: 'SnapshotPolicyId',
      subnetId: 'SubnetId',
      volumeEncryptionEnable: 'VolumeEncryptionEnable',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      gpuSpec: 'string',
      memorySize: 'number',
      officeSiteId: 'string',
      regionId: 'string',
      resourceInstanceType: 'string',
      snapshotPolicyId: 'string',
      subnetId: 'string',
      volumeEncryptionEnable: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

