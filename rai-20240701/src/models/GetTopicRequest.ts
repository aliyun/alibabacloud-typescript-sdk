// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 216
   */
  topicId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      topicId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

