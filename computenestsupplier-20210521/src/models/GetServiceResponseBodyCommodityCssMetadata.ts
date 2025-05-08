// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceResponseBodyCommodityCssMetadataComponentsMappings } from "./GetServiceResponseBodyCommodityCssMetadataComponentsMappings";
import { GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos } from "./GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos";
import { GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings } from "./GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings";


export class GetServiceResponseBodyCommodityCssMetadata extends $dara.Model {
  /**
   * @remarks
   * The mapping information about the billing items.
   */
  componentsMappings?: GetServiceResponseBodyCommodityCssMetadataComponentsMappings[];
  /**
   * @remarks
   * Metering item configuration information.
   */
  meteringEntityExtraInfos?: GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos[];
  /**
   * @remarks
   * The binding relationship between package and measurement dimension.
   */
  meteringEntityMappings?: GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings[];
  static names(): { [key: string]: string } {
    return {
      componentsMappings: 'ComponentsMappings',
      meteringEntityExtraInfos: 'MeteringEntityExtraInfos',
      meteringEntityMappings: 'MeteringEntityMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataComponentsMappings },
      meteringEntityExtraInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataMeteringEntityExtraInfos },
      meteringEntityMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings },
    };
  }

  validate() {
    if(Array.isArray(this.componentsMappings)) {
      $dara.Model.validateArray(this.componentsMappings);
    }
    if(Array.isArray(this.meteringEntityExtraInfos)) {
      $dara.Model.validateArray(this.meteringEntityExtraInfos);
    }
    if(Array.isArray(this.meteringEntityMappings)) {
      $dara.Model.validateArray(this.meteringEntityMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

