// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos } from "./GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos";
import { GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings } from "./GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings";
import { GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings } from "./GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings";


export class GetServiceResponseBodyCommodityMarketplaceMetadata extends $dara.Model {
  /**
   * @remarks
   * The configurations of the billable items.
   */
  meteringEntityExtraInfos?: GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos[];
  /**
   * @remarks
   * The billable items that are associated with the package.
   */
  meteringEntityMappings?: GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings[];
  /**
   * @remarks
   * The mappings between the service specifications and the template or package.
   */
  specificationMappings?: GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings[];
  static names(): { [key: string]: string } {
    return {
      meteringEntityExtraInfos: 'MeteringEntityExtraInfos',
      meteringEntityMappings: 'MeteringEntityMappings',
      specificationMappings: 'SpecificationMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meteringEntityExtraInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityExtraInfos },
      meteringEntityMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings },
      specificationMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings },
    };
  }

  validate() {
    if(Array.isArray(this.meteringEntityExtraInfos)) {
      $dara.Model.validateArray(this.meteringEntityExtraInfos);
    }
    if(Array.isArray(this.meteringEntityMappings)) {
      $dara.Model.validateArray(this.meteringEntityMappings);
    }
    if(Array.isArray(this.specificationMappings)) {
      $dara.Model.validateArray(this.specificationMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

