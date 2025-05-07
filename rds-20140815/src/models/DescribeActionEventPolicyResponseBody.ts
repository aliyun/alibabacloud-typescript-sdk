// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActionEventPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the event history feature is enabled.
   * 
   * @example
   * True
   */
  enableEventLog?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CCECD3CD-AB2D-4F6D-BEDE-47BC90A398D2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enableEventLog: 'EnableEventLog',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEventLog: 'string',
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

