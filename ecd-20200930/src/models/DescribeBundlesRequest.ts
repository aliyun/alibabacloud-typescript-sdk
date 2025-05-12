// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBundlesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computer templates. You can specify 1 to 100 IDs.
   * 
   * @example
   * bundle_ecd_graphics.2xlarge_s15d15_win2019
   */
  bundleId?: string[];
  /**
   * @remarks
   * The type of the cloud computer template.
   * 
   * Valid values:
   * 
   * *   SYSTEM: system template
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CUSTOM: custom template
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * SYSTEM
   */
  bundleType?: string;
  /**
   * @remarks
   * Specifies whether to query the inventory status of the cloud computer instance type.
   * 
   * @example
   * true
   */
  checkStock?: boolean;
  /**
   * @remarks
   * The number of vCPUs contained in the cloud computer instance type.
   * 
   * @example
   * 2
   */
  cpuCount?: number;
  /**
   * @remarks
   * The instance family of the cloud computers.
   * 
   * Valid values:
   * 
   * *   eds.graphics: graphical instance families
   * *   eds.hf: instance families with high clock speeds
   * *   eds.general: general-purpose instance families
   * 
   * @example
   * eds.general
   */
  desktopTypeFamily?: string;
  /**
   * @remarks
   * >  This parameter is not available for public use.
   * 
   * @example
   * This parameter is now in invitational preview and unavailable.
   */
  fotaChannel?: string;
  /**
   * @remarks
   * Specifies whether the cloud computers in the template belong to a cloud computer pool.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  fromDesktopGroup?: boolean;
  /**
   * @remarks
   * The number of GPUs contained in the cloud computer instance type.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU driver type.
   * 
   * Valid values:
   * 
   * *   T4
   * *   A10
   * *   G28
   * *   G39
   * 
   * @example
   * T4
   */
  gpuDriverType?: string;
  /**
   * @remarks
   * The image IDs.
   */
  imageId?: string[];
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The memory size of the cloud computer instance type. Unit: GiB.
   * 
   * @example
   * 4
   */
  memorySize?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the OS.
   * 
   * Valid values:
   * 
   * *   Linux
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Windows
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * Valid values:
   * 
   * *   HDX: High-definition Experience (HDX) protocol
   * *   ASP: in-house Adaptive Streaming Protocol (ASP) (recommend)
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by Elastic Desktop Service (EDS).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scenario to use the image.
   * 
   * @example
   * FastBuy
   */
  scope?: string;
  /**
   * @remarks
   * The desktop template that is selected based on specific criteria.
   * 
   * @example
   * true
   */
  selectedBundle?: boolean;
  /**
   * @remarks
   * The type of the session. Valide values:
   * 
   * - SingleSession
   * - MultipleSession
   * 
   * @example
   * SingleSession
   */
  sessionType?: string;
  /**
   * @remarks
   * Specifies whether to return multi-session cloud computer templates. Default value: false.
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

