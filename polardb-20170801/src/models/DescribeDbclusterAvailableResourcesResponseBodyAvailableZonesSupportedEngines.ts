// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources } from "./DescribeDbclusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources";


export class DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines extends $dara.Model {
  /**
   * @remarks
   * The available resources.
   */
  availableResources?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources[];
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * mysql57
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources },
      engine: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableResources)) {
      $dara.Model.validateArray(this.availableResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

