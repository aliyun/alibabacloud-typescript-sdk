// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ACS extends $dara.Model {
  /**
   * @remarks
   * ACS resource ID.
   * 
   * @example
   * rq-3kbt2gtimmyw7fgfgothocvh
   */
  ACSQuotaId?: string;
  /**
   * @remarks
   * Product codes that can use the ACS Quota.
   * 
   * Constraints:  
   * You can select multiple sub-products, but some sub-products are mutually exclusive. The following combinations can be selected simultaneously:  
   * - PAI-DLC, PAI-DSW  
   * - PAI-EAS
   */
  associatedProducts?: string[];
  static names(): { [key: string]: string } {
    return {
      ACSQuotaId: 'ACSQuotaId',
      associatedProducts: 'AssociatedProducts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACSQuotaId: 'string',
      associatedProducts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.associatedProducts)) {
      $dara.Model.validateArray(this.associatedProducts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

