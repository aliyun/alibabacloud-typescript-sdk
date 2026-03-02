// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CatalogCommonResult } from "./CatalogCommonResult";


export class AuditPbcInvokeReviewResponseBody extends $dara.Model {
  requestId?: string;
  result?: CatalogCommonResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CatalogCommonResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

