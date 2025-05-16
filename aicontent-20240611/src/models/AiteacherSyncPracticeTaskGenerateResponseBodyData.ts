// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AITeacherSyncPracticeTaskGenerateResponseBodyDataTaskContent } from "./AiteacherSyncPracticeTaskGenerateResponseBodyDataTaskContent";


export class AITeacherSyncPracticeTaskGenerateResponseBodyData extends $dara.Model {
  taskContent?: AITeacherSyncPracticeTaskGenerateResponseBodyDataTaskContent[];
  /**
   * @example
   * textbook_question_answering
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskContent: 'taskContent',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskContent: { 'type': 'array', 'itemType': AITeacherSyncPracticeTaskGenerateResponseBodyDataTaskContent },
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskContent)) {
      $dara.Model.validateArray(this.taskContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

