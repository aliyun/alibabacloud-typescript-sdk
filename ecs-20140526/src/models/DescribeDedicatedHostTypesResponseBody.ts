// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostTypesResponseBodyDedicatedHostTypes } from "./DescribeDedicatedHostTypesResponseBodyDedicatedHostTypes";


export class DescribeDedicatedHostTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the dedicated host types.
   */
  dedicatedHostTypes?: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FE5FF06-3A33-4658-8495-6445FC54E327
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostTypes: 'DedicatedHostTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostTypes: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dedicatedHostTypes && typeof (this.dedicatedHostTypes as any).validate === 'function') {
      (this.dedicatedHostTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

