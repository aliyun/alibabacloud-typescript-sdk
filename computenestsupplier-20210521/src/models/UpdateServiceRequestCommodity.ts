// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateServiceRequestCommodityComponentsMappings } from "./UpdateServiceRequestCommodityComponentsMappings";
import { UpdateServiceRequestCommodityMeteringEntityExtraInfos } from "./UpdateServiceRequestCommodityMeteringEntityExtraInfos";
import { UpdateServiceRequestCommodityMeteringEntityMappings } from "./UpdateServiceRequestCommodityMeteringEntityMappings";
import { UpdateServiceRequestCommoditySpecificationMappings } from "./UpdateServiceRequestCommoditySpecificationMappings";


export class UpdateServiceRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * This parameter is not available to the public.
   */
  componentsMappings?: UpdateServiceRequestCommodityComponentsMappings[];
  /**
   * @remarks
   * Metering entity extra information.
   */
  meteringEntityExtraInfos?: UpdateServiceRequestCommodityMeteringEntityExtraInfos[];
  /**
   * @remarks
   * Binding relationship between templates/specifications and metering dimensions (marketplace - PayAsYouGo)
   */
  meteringEntityMappings?: UpdateServiceRequestCommodityMeteringEntityMappings[];
  /**
   * @remarks
   * SaaS Boost configuration.
   * 
   * @example
   * {}
   */
  saasBoostConfig?: string;
  /**
   * @remarks
   * Product specifications and template/package mappings (Used in marketplace - subscription scenario)
   */
  specificationMappings?: UpdateServiceRequestCommoditySpecificationMappings[];
  static names(): { [key: string]: string } {
    return {
      componentsMappings: 'ComponentsMappings',
      meteringEntityExtraInfos: 'MeteringEntityExtraInfos',
      meteringEntityMappings: 'MeteringEntityMappings',
      saasBoostConfig: 'SaasBoostConfig',
      specificationMappings: 'SpecificationMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsMappings: { 'type': 'array', 'itemType': UpdateServiceRequestCommodityComponentsMappings },
      meteringEntityExtraInfos: { 'type': 'array', 'itemType': UpdateServiceRequestCommodityMeteringEntityExtraInfos },
      meteringEntityMappings: { 'type': 'array', 'itemType': UpdateServiceRequestCommodityMeteringEntityMappings },
      saasBoostConfig: 'string',
      specificationMappings: { 'type': 'array', 'itemType': UpdateServiceRequestCommoditySpecificationMappings },
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
    if(Array.isArray(this.specificationMappings)) {
      $dara.Model.validateArray(this.specificationMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

