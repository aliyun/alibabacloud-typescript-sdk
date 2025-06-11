// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParametersHistoryResponseBodyRespond } from "./DescribeParametersHistoryResponseBodyRespond";


export class DescribeParametersHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The list of parameter modification records.
   */
  respond?: DescribeParametersHistoryResponseBodyRespond;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      respond: 'Respond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      respond: DescribeParametersHistoryResponseBodyRespond,
    };
  }

  validate() {
    if(this.respond && typeof (this.respond as any).validate === 'function') {
      (this.respond as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

