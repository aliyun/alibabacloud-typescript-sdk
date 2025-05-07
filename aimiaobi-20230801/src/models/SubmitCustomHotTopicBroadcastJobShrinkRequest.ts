// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomHotTopicBroadcastJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotTopicBroadcastConfigShrink?: string;
  /**
   * @example
   * 热点版本
   */
  hotTopicVersion?: string;
  topicsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      hotTopicBroadcastConfigShrink: 'HotTopicBroadcastConfig',
      hotTopicVersion: 'HotTopicVersion',
      topicsShrink: 'Topics',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicBroadcastConfigShrink: 'string',
      hotTopicVersion: 'string',
      topicsShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

