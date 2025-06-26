// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResults } from "./GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResults";


export class GetCustomSourceTopicAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 5
   */
  clusterCount?: number;
  clusterResults?: GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResults[];
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * 8
   */
  maxClusteredTopicNewsSize?: number;
  /**
   * @example
   * 10
   */
  parsedNewsSize?: number;
  /**
   * @example
   * SUCCESSED
   */
  status?: string;
  rt?: number;
  usages?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      clusterCount: 'ClusterCount',
      clusterResults: 'ClusterResults',
      errorMessage: 'ErrorMessage',
      maxClusteredTopicNewsSize: 'MaxClusteredTopicNewsSize',
      parsedNewsSize: 'ParsedNewsSize',
      status: 'Status',
      rt: 'rt',
      usages: 'usages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCount: 'number',
      clusterResults: { 'type': 'array', 'itemType': GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResults },
      errorMessage: 'string',
      maxClusteredTopicNewsSize: 'number',
      parsedNewsSize: 'number',
      status: 'string',
      rt: 'number',
      usages: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.clusterResults)) {
      $dara.Model.validateArray(this.clusterResults);
    }
    if(this.usages) {
      $dara.Model.validateMap(this.usages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

