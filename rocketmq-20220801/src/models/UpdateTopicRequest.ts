// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of a lite topic, in minutes. Valid values: 15 to 720. The default value is -1, which indicates that the topic never expires.
   * 
   * @example
   * 20
   */
  liteTopicExpiration?: number;
  /**
   * @remarks
   * The maximum number of transactions per second (TPS) for sending messages.
   * 
   * @example
   * 1000
   */
  maxSendTps?: number;
  /**
   * @remarks
   * The updated remarks for the topic.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      liteTopicExpiration: 'liteTopicExpiration',
      maxSendTps: 'maxSendTps',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liteTopicExpiration: 'number',
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

