// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceComplianceByPackResponseBodyResourceComplianceResult } from "./GetResourceComplianceByPackResponseBodyResourceComplianceResult";


export class GetResourceComplianceByPackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
  requestId?: string;
  /**
   * @remarks
   * The compliance evaluation results returned.
   */
  resourceComplianceResult?: GetResourceComplianceByPackResponseBodyResourceComplianceResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceComplianceResult: 'ResourceComplianceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceComplianceResult: GetResourceComplianceByPackResponseBodyResourceComplianceResult,
    };
  }

  validate() {
    if(this.resourceComplianceResult && typeof (this.resourceComplianceResult as any).validate === 'function') {
      (this.resourceComplianceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

