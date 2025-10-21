// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTopicShrinkRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  topicIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      topicIdListShrink: 'TopicIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      topicIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

