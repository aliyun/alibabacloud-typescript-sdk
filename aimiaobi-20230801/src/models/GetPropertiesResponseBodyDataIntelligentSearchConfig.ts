// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPropertiesResponseBodyDataIntelligentSearchConfigCopilotPreciseSearchSources } from "./GetPropertiesResponseBodyDataIntelligentSearchConfigCopilotPreciseSearchSources";
import { GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples } from "./GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples";
import { GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources } from "./GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources";


export class GetPropertiesResponseBodyDataIntelligentSearchConfig extends $dara.Model {
  copilotPreciseSearchSources?: GetPropertiesResponseBodyDataIntelligentSearchConfigCopilotPreciseSearchSources[];
  /**
   * @example
   * xxx
   */
  productDescription?: string;
  searchSamples?: GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples[];
  searchSources?: GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources[];
  static names(): { [key: string]: string } {
    return {
      copilotPreciseSearchSources: 'CopilotPreciseSearchSources',
      productDescription: 'ProductDescription',
      searchSamples: 'SearchSamples',
      searchSources: 'SearchSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copilotPreciseSearchSources: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigCopilotPreciseSearchSources },
      productDescription: 'string',
      searchSamples: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples },
      searchSources: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources },
    };
  }

  validate() {
    if(Array.isArray(this.copilotPreciseSearchSources)) {
      $dara.Model.validateArray(this.copilotPreciseSearchSources);
    }
    if(Array.isArray(this.searchSamples)) {
      $dara.Model.validateArray(this.searchSamples);
    }
    if(Array.isArray(this.searchSources)) {
      $dara.Model.validateArray(this.searchSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

