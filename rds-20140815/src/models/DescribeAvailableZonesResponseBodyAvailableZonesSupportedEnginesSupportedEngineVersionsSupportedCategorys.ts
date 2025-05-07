// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes } from "./DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes";


export class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys extends $dara.Model {
  /**
   * @remarks
   * The RDS edition of the instance.
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The storage types that are available for purchase.
   */
  supportedStorageTypes?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      supportedStorageTypes: 'SupportedStorageTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      supportedStorageTypes: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes },
    };
  }

  validate() {
    if(Array.isArray(this.supportedStorageTypes)) {
      $dara.Model.validateArray(this.supportedStorageTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

