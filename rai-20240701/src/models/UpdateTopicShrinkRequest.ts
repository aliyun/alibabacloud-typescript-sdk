// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTopicShrinkRequest extends $dara.Model {
  bodyDataShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  topicDefinition?: string;
  /**
   * @example
   * 216
   */
  topicId?: number;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataShrink: 'BodyData',
      regionId: 'RegionId',
      topicDefinition: 'TopicDefinition',
      topicId: 'TopicId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataShrink: 'string',
      regionId: 'string',
      topicDefinition: 'string',
      topicId: 'number',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

