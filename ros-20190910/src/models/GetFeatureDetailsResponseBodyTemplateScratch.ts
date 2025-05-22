// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes } from "./GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes";


export class GetFeatureDetailsResponseBodyTemplateScratch extends $dara.Model {
  /**
   * @remarks
   * The resource types that are supported by the scenario feature.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes },
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

