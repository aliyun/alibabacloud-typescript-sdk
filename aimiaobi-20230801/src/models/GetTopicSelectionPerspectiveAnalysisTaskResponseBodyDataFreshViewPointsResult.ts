// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudes } from "./GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudes";


export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResult extends $dara.Model {
  attitudes?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudes[];
  static names(): { [key: string]: string } {
    return {
      attitudes: 'Attitudes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitudes: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudes },
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

