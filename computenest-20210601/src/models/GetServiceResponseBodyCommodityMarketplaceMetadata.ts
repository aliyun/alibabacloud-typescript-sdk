// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings } from "./GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings";


export class GetServiceResponseBodyCommodityMarketplaceMetadata extends $dara.Model {
  /**
   * @remarks
   * The mappings between the service specifications and the template or package.
   */
  specificationMappings?: GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings[];
  static names(): { [key: string]: string } {
    return {
      specificationMappings: 'SpecificationMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specificationMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings },
    };
  }

  validate() {
    if(Array.isArray(this.specificationMappings)) {
      $dara.Model.validateArray(this.specificationMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

