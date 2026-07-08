// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomHotTopicBroadcastJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration for the news broadcast job.
   * 
   * This parameter is required.
   */
  hotTopicBroadcastConfigShrink?: string;
  /**
   * @remarks
   * The version of the hot topic.
   * 
   * @example
   * 热点版本
   */
  hotTopicVersion?: string;
  /**
   * @remarks
   * The topic filter.
   */
  topicsShrink?: string;
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. For more information, see [Get a workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

