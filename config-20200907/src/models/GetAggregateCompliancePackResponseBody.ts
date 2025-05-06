// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateCompliancePackResponseBodyCompliancePack } from "./GetAggregateCompliancePackResponseBodyCompliancePack";


export class GetAggregateCompliancePackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the compliance package.
   */
  compliancePack?: GetAggregateCompliancePackResponseBodyCompliancePack;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePack: 'CompliancePack',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePack: GetAggregateCompliancePackResponseBodyCompliancePack,
      requestId: 'string',
    };
  }

  validate() {
    if(this.compliancePack && typeof (this.compliancePack as any).validate === 'function') {
      (this.compliancePack as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

