// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallPolicyPriorUsedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The lowest priority for the access control policy.
   * 
   * @example
   * 28
   */
  end?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCDF3907-1011-5504-B015-CC7603C0E6B6
   */
  requestId?: string;
  /**
   * @remarks
   * The highest priority for the access control policy.
   * 
   * @example
   * 1
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      requestId: 'RequestId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      requestId: 'string',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

