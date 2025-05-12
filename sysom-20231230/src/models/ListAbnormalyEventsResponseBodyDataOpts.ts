// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAbnormalyEventsResponseBodyDataOptsResult } from "./ListAbnormalyEventsResponseBodyDataOptsResult";


export class ListAbnormalyEventsResponseBodyDataOpts extends $dara.Model {
  label?: string;
  result?: ListAbnormalyEventsResponseBodyDataOptsResult;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      result: 'result',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      result: ListAbnormalyEventsResponseBodyDataOptsResult,
      type: 'string',
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

