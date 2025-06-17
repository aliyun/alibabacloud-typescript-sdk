// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchIntrudeDomainsResponseBodyData } from "./BatchIntrudeDomainsResponseBodyData";


export class BatchIntrudeDomainsResponseBody extends $dara.Model {
  data?: BatchIntrudeDomainsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BatchIntrudeDomainsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

