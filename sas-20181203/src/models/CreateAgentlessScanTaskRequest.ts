// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentlessScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Identification of asset selection.
   * 
   * @example
   * AGENTLESS_SCAN_ONCE_TASK_1720145******
   */
  assetSelectionType?: string;
  /**
   * @remarks
   * The retention period of images. Unit: days.
   * 
   * @example
   * 1
   */
  autoDeleteDays?: number;
  /**
   * @remarks
   * Specifies whether to enable the cost-saving mode. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  releaseAfterScan?: boolean;
  /**
   * @remarks
   * Specifies whether to check data disks. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  scanDataDisk?: boolean;
  /**
   * @remarks
   * The type of the detection object. Valid values:
   * 
   * *   **2**: image
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  targetType?: number;
  /**
   * @remarks
   * The UUIDs of the assets on which you want to run the detection task.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      assetSelectionType: 'AssetSelectionType',
      autoDeleteDays: 'AutoDeleteDays',
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

