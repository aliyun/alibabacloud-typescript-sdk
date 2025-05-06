// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteRemediationsResponseBodyRemediationDeleteResults } from "./DeleteRemediationsResponseBodyRemediationDeleteResults";


export class DeleteRemediationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  remediationDeleteResults?: DeleteRemediationsResponseBodyRemediationDeleteResults[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4BE28FB1-616A-5586-82E4-F34FB2AF7441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationDeleteResults: 'RemediationDeleteResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationDeleteResults: { 'type': 'array', 'itemType': DeleteRemediationsResponseBodyRemediationDeleteResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.remediationDeleteResults)) {
      $dara.Model.validateArray(this.remediationDeleteResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

