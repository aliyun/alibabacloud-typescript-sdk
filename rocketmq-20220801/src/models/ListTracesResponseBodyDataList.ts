// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTracesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Message born time.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  bornTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * Message id.
   * 
   * @example
   * 7F00000100207A4F0F294A938F7807AE
   */
  messageId?: string;
  /**
   * @remarks
   * Message keys.
   */
  messageKeys?: string[];
  /**
   * @remarks
   * Message tag.
   * 
   * @example
   * xx
   */
  messageTag?: string;
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
   * The name of the topic.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      bornTime: 'bornTime',
      instanceId: 'instanceId',
      messageId: 'messageId',
      messageKeys: 'messageKeys',
      messageTag: 'messageTag',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bornTime: 'string',
      instanceId: 'string',
      messageId: 'string',
      messageKeys: { 'type': 'array', 'itemType': 'string' },
      messageTag: 'string',
      regionId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messageKeys)) {
      $dara.Model.validateArray(this.messageKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

