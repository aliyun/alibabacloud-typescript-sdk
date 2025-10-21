// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTopicRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  topicIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      topicIdList: 'TopicIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      topicIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.topicIdList)) {
      $dara.Model.validateArray(this.topicIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

