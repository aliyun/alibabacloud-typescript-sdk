// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The execution time.
   * 
   * @example
   * 1752571330000
   */
  requestTime?: number;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 102059
   */
  ruleId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * 27
   */
  ruleSnapshotId?: string;
  /**
   * @remarks
   * The request ID.
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

