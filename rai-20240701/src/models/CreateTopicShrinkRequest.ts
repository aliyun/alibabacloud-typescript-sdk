// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTopicShrinkRequest extends $dara.Model {
  bodyDataShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  topicDefinition?: string;
  topicName?: string;
  /**
   * @example
   * 643168
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      bodyDataShrink: 'BodyData',
      regionId: 'RegionId',
      topicDefinition: 'TopicDefinition',
      topicName: 'TopicName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataShrink: 'string',
      regionId: 'string',
      topicDefinition: 'string',
      topicName: 'string',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

