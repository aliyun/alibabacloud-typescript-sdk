// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetRefreshTaskConfigResponseBodyAssetRefreshConfig extends $dara.Model {
  /**
   * @remarks
   * The type of the configuration. Valid values:
   * 
   * *   **0**: server synchronization task
   * *   **1**: cloud service synchronization task
   * *   **2**: scheduled AccessKey pair verification task
   * 
   * @example
   * 1
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
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshConfigType: 'number',
      schedulePeriod: 'number',
      status: 'number',
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

export class ListAssetRefreshTaskConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asset synchronization configuration.
   */
  assetRefreshConfig?: ListAssetRefreshTaskConfigResponseBodyAssetRefreshConfig[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D65AADFC-1D20-5A6A-8F6A-9FA53C0DC1F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetRefreshConfig: 'AssetRefreshConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetRefreshConfig: { 'type': 'array', 'itemType': ListAssetRefreshTaskConfigResponseBodyAssetRefreshConfig },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetRefreshConfig)) {
      $dara.Model.validateArray(this.assetRefreshConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

