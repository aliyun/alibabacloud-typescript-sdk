// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions } from "./DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions";


export class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines extends $dara.Model {
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine versions that are available for purchase.
   */
  supportedEngineVersions?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions[];
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      supportedEngineVersions: 'SupportedEngineVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      supportedEngineVersions: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions },
    };
  }

  validate() {
    if(Array.isArray(this.supportedEngineVersions)) {
      $dara.Model.validateArray(this.supportedEngineVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

