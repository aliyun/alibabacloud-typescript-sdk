// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TraceInfo } from "./TraceInfo";


export class SearchTracesPageResult extends $dara.Model {
  traceInfos?: TraceInfo[];
  static names(): { [key: string]: string } {
    return {
      traceInfos: 'traceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

