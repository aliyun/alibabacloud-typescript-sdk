// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * Maximum send message tps
   * 
   * @example
   * 500
   */
  maxSendTps?: number;
  /**
   * @remarks
   * Updated remarks for the topic.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      maxSendTps: 'maxSendTps',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSendTps: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

