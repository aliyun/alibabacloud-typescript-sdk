// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFeatureDetailsResponseBodyResourceImportSupportedResourceTypes } from "./GetFeatureDetailsResponseBodyResourceImportSupportedResourceTypes";


export class GetFeatureDetailsResponseBodyResourceImport extends $dara.Model {
  /**
   * @remarks
   * The resource types that are supported by the resource import feature.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyResourceImportSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyResourceImportSupportedResourceTypes },
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

