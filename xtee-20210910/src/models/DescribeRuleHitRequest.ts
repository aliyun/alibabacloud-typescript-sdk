// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Execution time
   * 
   * @example
   * 1752571330000
   */
  requestTime?: number;
  /**
   * @remarks
   * Rule ID
   * 
   * @example
   * 102059
   */
  ruleId?: string;
  /**
   * @remarks
   * Snapshot ID.
   * 
   * @example
   * 27
   */
  ruleSnapshotId?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 60C97040-D5D5-4906-9522-B9B413730CAA
   */
  sRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'regId',
      requestTime: 'requestTime',
      ruleId: 'ruleId',
      ruleSnapshotId: 'ruleSnapshotId',
      sRequestId: 'sRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      requestTime: 'number',
      ruleId: 'string',
      ruleSnapshotId: 'string',
      sRequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

