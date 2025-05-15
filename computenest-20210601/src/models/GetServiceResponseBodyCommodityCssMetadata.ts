// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceResponseBodyCommodityCssMetadataComponentsMappings } from "./GetServiceResponseBodyCommodityCssMetadataComponentsMappings";


export class GetServiceResponseBodyCommodityCssMetadata extends $dara.Model {
  /**
   * @remarks
   * The mapping information about the billing items.
   */
  componentsMappings?: GetServiceResponseBodyCommodityCssMetadataComponentsMappings[];
  static names(): { [key: string]: string } {
    return {
      componentsMappings: 'ComponentsMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataComponentsMappings },
    };
  }

  validate() {
    if(Array.isArray(this.componentsMappings)) {
      $dara.Model.validateArray(this.componentsMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

