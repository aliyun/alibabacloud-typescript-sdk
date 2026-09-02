// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * The ID of the region in which the instance resides. Valid values:
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
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

