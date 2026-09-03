// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBundlesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud computer template IDs. You can specify 1 to 100 IDs.
   * 
   * @example
   * bundle_ecd_graphics.2xlarge_s15d15_win2019
   */
  bundleId?: string[];
  /**
   * @remarks
   * The cloud computer templatetype.
   * 
   * @example
   * SYSTEM
   */
  bundleType?: string;
  /**
   * @remarks
   * Specifies whether to query the stock status of the cloud computer instance type.
   * 
   * @example
   * true
   */
  checkStock?: boolean;
  /**
   * @remarks
   * The number of vCPUs included in the cloud computer instance type.
   * 
   * @example
   * 2
   */
  cpuCount?: number;
  /**
   * @remarks
   * The cloud computer instance family.
   * 
   * @example
   * eds.general
   */
  desktopTypeFamily?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * example
   */
  fotaChannel?: string;
  /**
   * @remarks
   * Specifies whether the template belongs to a cloud computer pool.
   * 
   * @example
   * false
   */
  fromDesktopGroup?: boolean;
  /**
   * @remarks
   * The number of GPUs included in the cloud computer instance type.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU driver type.
   * 
   * @example
   * T4
   */
  gpuDriverType?: string;
  /**
   * @remarks
   * The list of image IDs.
   */
  imageId?: string[];
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The memory size included in the cloud computer instance type. Unit: GiB.
   * 
   * @example
   * 4
   */
  memorySize?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Scenarios.
   * 
   * @example
   * FastBuy
   */
  scope?: string;
  /**
   * @remarks
   * The selected template.
   * 
   * @example
   * true
   */
  selectedBundle?: boolean;
  /**
   * @remarks
   * The session type.
   * 
   * @example
   * SingleSession
   */
  sessionType?: string;
  /**
   * @remarks
   * Specifies whether to return multi-session cloud computer templates when querying the cloud computer list. Multi-session templates are not returned by default.
   * 
   * @example
   * false
   */
  supportMultiSession?: boolean;
  /**
   * @remarks
   * Specifies whether to enable disk encryption.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      bundleType: 'BundleType',
      checkStock: 'CheckStock',
      cpuCount: 'CpuCount',
      desktopTypeFamily: 'DesktopTypeFamily',
      fotaChannel: 'FotaChannel',
      fromDesktopGroup: 'FromDesktopGroup',
      gpuCount: 'GpuCount',
      gpuDriverType: 'GpuDriverType',
      imageId: 'ImageId',
      maxResults: 'MaxResults',
      memorySize: 'MemorySize',
      nextToken: 'NextToken',
      osType: 'OsType',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      scope: 'Scope',
      selectedBundle: 'SelectedBundle',
      sessionType: 'SessionType',
      supportMultiSession: 'SupportMultiSession',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: { 'type': 'array', 'itemType': 'string' },
      bundleType: 'string',
      checkStock: 'boolean',
      cpuCount: 'number',
      desktopTypeFamily: 'string',
      fotaChannel: 'string',
      fromDesktopGroup: 'boolean',
      gpuCount: 'number',
      gpuDriverType: 'string',
      imageId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      memorySize: 'number',
      nextToken: 'string',
      osType: 'string',
      protocolType: 'string',
      regionId: 'string',
      scope: 'string',
      selectedBundle: 'boolean',
      sessionType: 'string',
      supportMultiSession: 'boolean',
      volumeEncryptionEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.bundleId)) {
      $dara.Model.validateArray(this.bundleId);
    }
    if(Array.isArray(this.imageId)) {
      $dara.Model.validateArray(this.imageId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

