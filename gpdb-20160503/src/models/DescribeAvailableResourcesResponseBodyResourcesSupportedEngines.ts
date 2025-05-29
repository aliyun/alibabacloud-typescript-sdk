// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses } from "./DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses";


export class DescribeAvailableResourcesResponseBodyResourcesSupportedEngines extends $dara.Model {
  /**
   * @remarks
   * The instance resource type. Valid values:
   * 
   * *   **ecs**: elastic storage mode
   * *   **serverless**: Serverless mode
   * 
   * @example
   * ecs
   */
  mode?: string;
  /**
   * @remarks
   * The available engine version.
   * 
   * @example
   * 6.0
   */
  supportedEngineVersion?: string;
  /**
   * @remarks
   * The available specifications.
   */
  supportedInstanceClasses?: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      supportedEngineVersion: 'SupportedEngineVersion',
      supportedInstanceClasses: 'SupportedInstanceClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      supportedEngineVersion: 'string',
      supportedInstanceClasses: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceClasses)) {
      $dara.Model.validateArray(this.supportedInstanceClasses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

