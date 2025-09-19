// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSyncRefreshRegionRequest extends $dara.Model {
  /**
   * @remarks
   * The access type of the multi-cloud site. Valid values:
   * 
   * *   **0**: The current site is not the default site of multi-cloud site. You can specify the current site as the default site of the multi-cloud site.
   * *   **1**: The current site is the default site of multi-cloud site.
   * 
   * @example
   * 0
   */
  defaultRegion?: number;
  /**
   * @remarks
   * The regions from which you want to synchronize assets at the current site.
   */
  regionIds?: string[];
  /**
   * @remarks
   * The cloud service provider. Valid values:
   * 
   * *   **Tencent**: Tencent Cloud
   * *   **HUAWEICLOUD**: Huawei Cloud
   * *   **Azure**: Microsoft Azure
   * *   **AWS**: Amazon Web Services (AWS)
   * 
   * @example
   * Tencent
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRegion: 'DefaultRegion',
      regionIds: 'RegionIds',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRegion: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      vendor: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

