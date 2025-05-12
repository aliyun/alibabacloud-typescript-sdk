// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInvocationsResponseBodyInvocations } from "./DescribeInvocationsResponseBodyInvocations";


export class DescribeInvocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The command execution records.
   */
  invocations?: DescribeInvocationsResponseBodyInvocations[];
  /**
   * @remarks
   * The query token that is returned from this call.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocations },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.invocations)) {
      $dara.Model.validateArray(this.invocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

