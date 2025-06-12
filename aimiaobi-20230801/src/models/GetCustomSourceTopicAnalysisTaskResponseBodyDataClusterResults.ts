// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResultsClusterNews } from "./GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResultsClusterNews";


export class GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResults extends $dara.Model {
  clusterNews?: GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResultsClusterNews[];
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNews: 'ClusterNews',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNews: { 'type': 'array', 'itemType': GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResultsClusterNews },
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterNews)) {
      $dara.Model.validateArray(this.clusterNews);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

