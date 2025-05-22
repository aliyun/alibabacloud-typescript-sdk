// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes } from "./GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes";


export class GetFeatureDetailsResponseBodyResourceCleaner extends $dara.Model {
  /**
   * @remarks
   * The resource types that can be cleaned up.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes },
    };
  }

  validate() {
    if(Array.isArray(this.supportedResourceTypes)) {
      $dara.Model.validateArray(this.supportedResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

