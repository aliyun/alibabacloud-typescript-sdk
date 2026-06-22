// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSyncRefreshRegionRequest extends $dara.Model {
  /**
   * @remarks
   * The access type of the multi-cloud site. Valid values:
   * - **0**: no default site is configured, and you can select regions as needed.
   * - **1**: the current site is already the default site.
   * 
   * @example
   * 0
   */
  defaultRegion?: number;
  /**
   * @remarks
   * The list of regions to be synchronized for the current site.
   */
  regionIds?: string[];
  /**
   * @remarks
   * The cloud asset vendor. Valid values:
   * 
   * - **Tencent**: Tencent Cloud.
   * - **HUAWEICLOUD**: Huawei Cloud.
   * - **Azure**: Azure.
   * - **AWS**: AWS.
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

