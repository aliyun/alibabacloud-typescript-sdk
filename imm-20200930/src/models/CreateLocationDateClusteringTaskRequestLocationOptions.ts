// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLocationDateClusteringTaskRequestLocationOptions extends $dara.Model {
  /**
   * @remarks
   * The administrative division levels. You can specify multiple administrative division levels.
   * 
   * For example, you uploaded photos that were taken from March 3, 2024 to March 5, 2024 in Hangzhou and photos that were taken from March 6, 2024 to March 8, 2024 in Jiaxing. When you call the operation and set the parameter to `["city", "province"]`, the following spatiotemporal clusters are created from these photos:
   * 
   * *   March 3, 2024 to March 5, 2024, Hangzhou
   * *   March 6, 2024 to March 8, 2024, Jiaxing
   * *   March 3, 2024 to March 8, 2024, Zhejiang
   * 
   * This parameter is required.
   */
  locationDateClusterLevels?: string[];
  static names(): { [key: string]: string } {
    return {
      locationDateClusterLevels: 'LocationDateClusterLevels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationDateClusterLevels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.locationDateClusterLevels)) {
      $dara.Model.validateArray(this.locationDateClusterLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

