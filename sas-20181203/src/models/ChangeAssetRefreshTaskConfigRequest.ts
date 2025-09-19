// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeAssetRefreshTaskConfigRequestAssetRefreshConfigs extends $dara.Model {
  /**
   * @remarks
   * The type of the configuration. Valid values:
   * 
   * *   **0**: server synchronization task
   * *   **1**: cloud service synchronization task
   * *   **2**: scheduled AccessKey pair verification task
   * 
   * @example
   * 2
   */
  refreshConfigType?: number;
  /**
   * @remarks
   * The synchronization cycle. Valid values:
   * 
   * *   **60**: 60 minutes
   * *   **180**: 3 hours
   * *   **360**: 6 hours
   * *   **720**: 12 hours
   * *   **1440**: 1 day
   * *   **10080**: 7 days
   * 
   * @example
   * 360
   */
  schedulePeriod?: number;
  /**
   * @remarks
   * The status of the configuration. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the data entry containing the AccessKey pair that you specify when you configure the scheduled AccessKey pair verification task.
   * 
   * @example
   * 2308
   */
  targetId?: number;
  /**
   * @remarks
   * The service provider of the cloud asset. Valid values:
   * 
   * *   **3**: Tencent Cloud
   * *   **4**: Huawei Cloud
   * *   **7**: Amazon Web Services (AWS) Cloud
   * 
   * @example
   * 3
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      refreshConfigType: 'RefreshConfigType',
      schedulePeriod: 'SchedulePeriod',
      status: 'Status',
      targetId: 'TargetId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshConfigType: 'number',
      schedulePeriod: 'number',
      status: 'number',
      targetId: 'number',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAssetRefreshTaskConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The asset synchronization configuration.
   */
  assetRefreshConfigs?: ChangeAssetRefreshTaskConfigRequestAssetRefreshConfigs[];
  /**
   * @remarks
   * The region in which your Security Center service resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetRefreshConfigs: 'AssetRefreshConfigs',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetRefreshConfigs: { 'type': 'array', 'itemType': ChangeAssetRefreshTaskConfigRequestAssetRefreshConfigs },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetRefreshConfigs)) {
      $dara.Model.validateArray(this.assetRefreshConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

