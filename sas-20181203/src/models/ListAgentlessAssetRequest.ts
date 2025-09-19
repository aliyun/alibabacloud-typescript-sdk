// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The page number in a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the cloud disk. Values:
   * 
   * - **system**: System disk
   * 
   * - **data**: Data disk
   * 
   * @example
   * data
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of the asset instance.
   * 
   * @example
   * s-bp1g6wxdwps7s9dz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the asset instance.
   * 
   * @example
   * ca_cpm_******
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum number of items to return per page in a paginated query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  scanRegionId?: string;
  /**
   * @remarks
   * The type of the detection target. Values:
   * 
   * - **3**: User snapshot
   * 
   * - **4**: User-defined image
   * 
   * @example
   * 1
   */
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      diskType: 'DiskType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      pageSize: 'PageSize',
      platform: 'Platform',
      scanRegionId: 'ScanRegionId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      diskType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      pageSize: 'number',
      platform: 'string',
      scanRegionId: 'string',
      targetType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

