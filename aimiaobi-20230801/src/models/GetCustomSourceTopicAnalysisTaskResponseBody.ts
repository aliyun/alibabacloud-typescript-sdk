// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResultsClusterNews extends $dara.Model {
  title?: string;
  /**
   * @example
   * http://www.example.com/xxx.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetCustomSourceTopicAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetCustomSourceTopicAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomSourceTopicAnalysisTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

