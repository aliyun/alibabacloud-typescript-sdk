// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAuditTaskResponseBodyDataResponseHeader } from "./QueryAuditTaskResponseBodyDataResponseHeader";
import { QueryAuditTaskResponseBodyDataResponsePayload } from "./QueryAuditTaskResponseBodyDataResponsePayload";


export class QueryAuditTaskResponseBodyDataResponse extends $dara.Model {
  header?: QueryAuditTaskResponseBodyDataResponseHeader;
  payload?: QueryAuditTaskResponseBodyDataResponsePayload;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: QueryAuditTaskResponseBodyDataResponseHeader,
      payload: QueryAuditTaskResponseBodyDataResponsePayload,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

