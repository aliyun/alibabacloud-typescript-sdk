// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SparkSession extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: string;
  /**
   * @example
   * 11123123
   */
  aliyunUid?: number;
  /**
   * @example
   * 15
   */
  sessionId?: number;
  /**
   * @example
   * idle
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      aliyunUid: 'AliyunUid',
      sessionId: 'SessionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'string',
      aliyunUid: 'number',
      sessionId: 'number',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

