// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentlessScanTaskRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The ID of the source ECS custom image to be remediated. The image must be located in the region specified by RegionId of this target.
   * 
   * @example
   * m-bp1example123456789
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the source ECS custom image to be remediated.
   * 
   * @example
   * source-image
   */
  originImageName?: string;
  /**
   * @remarks
   * The name of the ECS image generated after remediation.
   * 
   * @example
   * patched-image-20260909
   */
  outputImageName?: string;
  /**
   * @remarks
   * The region ID of the source image to be remediated, such as cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of vulnerability identifiers to be fixed. At least one vulnerability identifier must be specified. Each identifier must be unique and non-empty.
   */
  vulnerabilityIds?: string[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      originImageName: 'OriginImageName',
      outputImageName: 'OutputImageName',
      regionId: 'RegionId',
      vulnerabilityIds: 'VulnerabilityIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      originImageName: 'string',
      outputImageName: 'string',
      regionId: 'string',
      vulnerabilityIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vulnerabilityIds)) {
      $dara.Model.validateArray(this.vulnerabilityIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentlessScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The asset selection identifier.
   * 
   * @example
   * AGENTLESS_SCAN_ONCE_TASK_1720145******
   */
  assetSelectionType?: string;
  /**
   * @remarks
   * The image retention period, in days. This parameter takes effect only for host detection. It does not take effect for user snapshot detection or user custom image detection.
   * 
   * @example
   * 1
   */
  autoDeleteDays?: number;
  /**
   * @remarks
   * The idempotency key.
   * 
   * @example
   * 66a9c708-d4a4-4fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the instance to query. Valid values:
   * 
   * - **cn-hangzhou** (default): China.
   * - **ap-southeast-1**: outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable the cost-saving mode. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  releaseAfterScan?: boolean;
  /**
   * @remarks
   * Specifies whether to detect data cloud disks. Valid values:
   * 
   * - **true**: Detected.
   * - **false**: Not detected.
   * 
   * @example
   * true
   */
  scanDataDisk?: boolean;
  /**
   * @remarks
   * The target type. Valid values:
   * 
   * - **1**: Host detection - detection by snapshot.
   * - **2**: Host detection - detection by image.
   * - **3**: User snapshot detection.
   * - **2**: User custom image detection.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  targetType?: number;
  /**
   * @remarks
   * The list of targets for image security remediation. Each target specifies the source image, the region, the name of the remediated image, and the vulnerability identifiers to be fixed.
   */
  targets?: CreateAgentlessScanTaskRequestTargets[];
  /**
   * @remarks
   * The UUIDs of the assets to be detected.
   * 
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain the UUIDs of servers.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      assetSelectionType: 'AssetSelectionType',
      autoDeleteDays: 'AutoDeleteDays',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      releaseAfterScan: 'ReleaseAfterScan',
      scanDataDisk: 'ScanDataDisk',
      targetType: 'TargetType',
      targets: 'Targets',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSelectionType: 'string',
      autoDeleteDays: 'number',
      clientToken: 'string',
      regionId: 'string',
      releaseAfterScan: 'boolean',
      scanDataDisk: 'boolean',
      targetType: 'number',
      targets: { 'type': 'array', 'itemType': CreateAgentlessScanTaskRequestTargets },
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

