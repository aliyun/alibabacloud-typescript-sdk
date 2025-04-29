// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePrefixListAssociationsResponseBodyPrefixListAssociationsPrefixListAssociation } from "./DescribePrefixListAssociationsResponseBodyPrefixListAssociationsPrefixListAssociation";


export class DescribePrefixListAssociationsResponseBodyPrefixListAssociations extends $dara.Model {
  prefixListAssociation?: DescribePrefixListAssociationsResponseBodyPrefixListAssociationsPrefixListAssociation[];
  static names(): { [key: string]: string } {
    return {
      prefixListAssociation: 'PrefixListAssociation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefixListAssociation: { 'type': 'array', 'itemType': DescribePrefixListAssociationsResponseBodyPrefixListAssociationsPrefixListAssociation },
    };
  }

  validate() {
    if(Array.isArray(this.prefixListAssociation)) {
      $dara.Model.validateArray(this.prefixListAssociation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

