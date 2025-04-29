// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateBroadcastNewsResponseBodyDataHotTopicSummaries } from "./GenerateBroadcastNewsResponseBodyDataHotTopicSummaries";
import { GenerateBroadcastNewsResponseBodyDataUsage } from "./GenerateBroadcastNewsResponseBodyDataUsage";


export class GenerateBroadcastNewsResponseBodyData extends $dara.Model {
  hotTopicSummaries?: GenerateBroadcastNewsResponseBodyDataHotTopicSummaries[];
  /**
   * @example
   * 2bb0ea82dafd48a8817fadc4c90e2b52
   */
  sessionId?: string;
  /**
   * @example
   * 3feb69ed02d9b1a17d0f1a942675d300
   */
  taskId?: string;
  text?: string;
  usage?: GenerateBroadcastNewsResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      hotTopicSummaries: 'hotTopicSummaries',
      sessionId: 'sessionId',
      taskId: 'taskId',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicSummaries: { 'type': 'array', 'itemType': GenerateBroadcastNewsResponseBodyDataHotTopicSummaries },
      sessionId: 'string',
      taskId: 'string',
      text: 'string',
      usage: GenerateBroadcastNewsResponseBodyDataUsage,
    };
  }

  validate() {
    if(Array.isArray(this.hotTopicSummaries)) {
      $dara.Model.validateArray(this.hotTopicSummaries);
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

