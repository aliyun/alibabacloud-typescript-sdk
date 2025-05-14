// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetModelFeatureResponseBodyRelationsDomains } from "./GetModelFeatureResponseBodyRelationsDomains";
import { GetModelFeatureResponseBodyRelationsLinks } from "./GetModelFeatureResponseBodyRelationsLinks";


export class GetModelFeatureResponseBodyRelations extends $dara.Model {
  domains?: GetModelFeatureResponseBodyRelationsDomains[];
  links?: GetModelFeatureResponseBodyRelationsLinks[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      links: 'Links',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': GetModelFeatureResponseBodyRelationsDomains },
      links: { 'type': 'array', 'itemType': GetModelFeatureResponseBodyRelationsLinks },
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    if(Array.isArray(this.links)) {
      $dara.Model.validateArray(this.links);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

