// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunRCInstancesRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the data disk. Set the value to **cloud_essd**, which indicates Enterprise SSDs (ESSDs).
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * null
   */
  deleteWithInstance?: boolean;
  device?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the cloud disk. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * null
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB.
   * 
   * @example
   * 10
   */
  size?: number;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      device: 'Device',
      encrypted: 'Encrypted',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      device: 'string',
      encrypted: 'string',
      performanceLevel: 'string',
      size: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

