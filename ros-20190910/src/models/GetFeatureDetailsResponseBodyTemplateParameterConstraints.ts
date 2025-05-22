// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFeatureDetailsResponseBodyTemplateParameterConstraintsSupportedResourceTypes } from "./GetFeatureDetailsResponseBodyTemplateParameterConstraintsSupportedResourceTypes";


export class GetFeatureDetailsResponseBodyTemplateParameterConstraints extends $dara.Model {
  /**
   * @remarks
   * The resource types that support the template parameter constraint feature.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyTemplateParameterConstraintsSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTemplateParameterConstraintsSupportedResourceTypes },
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

