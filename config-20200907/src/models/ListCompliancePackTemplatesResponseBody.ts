// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult } from "./ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult";


export class ListCompliancePackTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the compliance package templates returned.
   */
  compliancePackTemplatesResult?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D67FC82F-25AE-4268-A94C-3348340748F9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplatesResult: 'CompliancePackTemplatesResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplatesResult: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.compliancePackTemplatesResult && typeof (this.compliancePackTemplatesResult as any).validate === 'function') {
      (this.compliancePackTemplatesResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

