// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateRemediationExecutionsResponseBodyRemediationExecutionData } from "./ListAggregateRemediationExecutionsResponseBodyRemediationExecutionData";


export class ListAggregateRemediationExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried remediation records.
   */
  remediationExecutionData?: ListAggregateRemediationExecutionsResponseBodyRemediationExecutionData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 13E67493-3165-529A-A961-BE9E4B11BA11
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationExecutionData: 'RemediationExecutionData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationExecutionData: ListAggregateRemediationExecutionsResponseBodyRemediationExecutionData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.remediationExecutionData && typeof (this.remediationExecutionData as any).validate === 'function') {
      (this.remediationExecutionData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

