// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCredits } from "./SearchCredits";
import { ValueAddedCredits } from "./ValueAddedCredits";


export class UnifiedCostCredits extends $dara.Model {
  search?: SearchCredits;
  valueAdded?: ValueAddedCredits;
  static names(): { [key: string]: string } {
    return {
      search: 'search',
      valueAdded: 'valueAdded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      search: SearchCredits,
      valueAdded: ValueAddedCredits,
    };
  }

  validate() {
    if(this.search && typeof (this.search as any).validate === 'function') {
      (this.search as any).validate();
    }
    if(this.valueAdded && typeof (this.valueAdded as any).validate === 'function') {
      (this.valueAdded as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

