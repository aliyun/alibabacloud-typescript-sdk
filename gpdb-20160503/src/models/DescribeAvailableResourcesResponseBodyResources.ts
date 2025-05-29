// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourcesResponseBodyResourcesSupportedEngines } from "./DescribeAvailableResourcesResponseBodyResourcesSupportedEngines";


export class DescribeAvailableResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The available engine version and specifications.
   */
  supportedEngines?: DescribeAvailableResourcesResponseBodyResourcesSupportedEngines[];
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      supportedEngines: 'SupportedEngines',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngines: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseBodyResourcesSupportedEngines },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedEngines)) {
      $dara.Model.validateArray(this.supportedEngines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

