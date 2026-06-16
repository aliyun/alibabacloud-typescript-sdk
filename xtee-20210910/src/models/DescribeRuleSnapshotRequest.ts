// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for sending and receiving messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
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
   * The policy ID.
   * 
   * @example
   * 101544
   */
  ruleId?: string;
  /**
   * @remarks
   * The snapshot version.
   * 
   * @example
   * 10
   */
  snapshotVersion?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'regId',
      ruleId: 'ruleId',
      snapshotVersion: 'snapshotVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      ruleId: 'string',
      snapshotVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

