// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TraceInfo } from "./TraceInfo";


export class SearchTracesByPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * sdadawqewe
   */
  requestId?: string;
  traceInfos?: TraceInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      traceInfos: 'traceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceInfos: { 'type': 'array', 'itemType': TraceInfo },
    };
  }

  validate() {
    if(Array.isArray(this.traceInfos)) {
      $dara.Model.validateArray(this.traceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

