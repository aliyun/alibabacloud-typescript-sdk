// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudes } from "./GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudes";


export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResult extends $dara.Model {
  attitudes?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudes[];
  /**
   * @example
   * 热点主题事件
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      attitudes: 'Attitudes',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitudes: { 'type': 'array', 'itemType': GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudes },
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attitudes)) {
      $dara.Model.validateArray(this.attitudes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

