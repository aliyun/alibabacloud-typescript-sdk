// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys } from "./DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys";


export class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions extends $dara.Model {
  /**
   * @remarks
   * The RDS editions that are available that are available for purchase.
   */
  supportedCategorys?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys[];
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 8.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      supportedCategorys: 'SupportedCategorys',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCategorys: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedCategorys)) {
      $dara.Model.validateArray(this.supportedCategorys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

