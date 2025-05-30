// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm } from "./GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm";
import { GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLowFrequency } from "./GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLowFrequency";


export class GetProjectResponseBodyDataPropertiesTableLifecycleConfig extends $dara.Model {
  /**
   * @remarks
   * The information about the long-term storage tier.
   */
  tierToLongterm?: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm;
  /**
   * @remarks
   * The information about the IA storage tier.
   */
  tierToLowFrequency?: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLowFrequency;
  static names(): { [key: string]: string } {
    return {
      tierToLongterm: 'TierToLongterm',
      tierToLowFrequency: 'TierToLowFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tierToLongterm: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm,
      tierToLowFrequency: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLowFrequency,
    };
  }

  validate() {
    if(this.tierToLongterm && typeof (this.tierToLongterm as any).validate === 'function') {
      (this.tierToLongterm as any).validate();
    }
    if(this.tierToLowFrequency && typeof (this.tierToLowFrequency as any).validate === 'function') {
      (this.tierToLowFrequency as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

