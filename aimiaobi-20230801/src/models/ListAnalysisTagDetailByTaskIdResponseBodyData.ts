// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags } from "./ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags";


export class ListAnalysisTagDetailByTaskIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  contentTags?: ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags[];
  /**
   * @example
   * 112
   */
  id?: number;
  /**
   * @example
   * summaryAndOverview
   */
  tagTaskType?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentTags: 'ContentTags',
      id: 'Id',
      tagTaskType: 'TagTaskType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentTags: { 'type': 'array', 'itemType': ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags },
      id: 'number',
      tagTaskType: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentTags)) {
      $dara.Model.validateArray(this.contentTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

