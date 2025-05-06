// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateRemediationsResponseBodyRemediations } from "./ListAggregateRemediationsResponseBodyRemediations";


export class ListAggregateRemediationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that contains remediation templates.
   */
  remediations?: ListAggregateRemediationsResponseBodyRemediations[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0146963A-20C0-4E75-B93A-7D622B5FD7C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediations: 'Remediations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediations: { 'type': 'array', 'itemType': ListAggregateRemediationsResponseBodyRemediations },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.remediations)) {
      $dara.Model.validateArray(this.remediations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

