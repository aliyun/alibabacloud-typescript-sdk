// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfig } from "./SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfig";


export class SubmitCustomHotTopicBroadcastJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotTopicBroadcastConfig?: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfig;
  /**
   * @example
   * 热点版本
   */
  hotTopicVersion?: string;
  topics?: string[];
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
      hotTopicBroadcastConfig: 'HotTopicBroadcastConfig',
      hotTopicVersion: 'HotTopicVersion',
      topics: 'Topics',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicBroadcastConfig: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfig,
      hotTopicVersion: 'string',
      topics: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.hotTopicBroadcastConfig && typeof (this.hotTopicBroadcastConfig as any).validate === 'function') {
      (this.hotTopicBroadcastConfig as any).validate();
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

