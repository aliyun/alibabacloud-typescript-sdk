// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IdentityToBenefitPkgMapping } from "./IdentityToBenefitPkgMapping";


export class ListIdentityToBenefitPkgMappingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the benefit packages that are associated with an entity.
   */
  items?: IdentityToBenefitPkgMapping[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': IdentityToBenefitPkgMapping },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

