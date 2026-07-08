// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResultsClusterNews extends $dara.Model {
  /**
   * @remarks
   * The title of the news article.
   * 
   * @example
   * 新闻标题
   */
  title?: string;
  /**
   * @remarks
   * The URL of the news article.
   * 
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
  /**
   * @remarks
   * A list of aggregated news articles. The body text is not included.
   */
  clusterNews?: GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResultsClusterNews[];
  /**
   * @remarks
   * The name of the aggregated topic.
   * 
   * @example
   * 话题名称
   */
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
   * @remarks
   * The number of documents after clustering.
   * 
   * @example
   * 5
   */
  clusterCount?: number;
  /**
   * @remarks
   * A list of news aggregation results.
   */
  clusterResults?: GetCustomSourceTopicAnalysisTaskResponseBodyDataClusterResults[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * The maximum number of news articles in a cluster after aggregation.
   * 
   * @example
   * 8
   */
  maxClusteredTopicNewsSize?: number;
  /**
   * @remarks
   * The number of news articles after the file is parsed.
   * 
   * @example
   * 10
   */
  parsedNewsSize?: number;
  /**
   * @remarks
   * The status of the task. Valid values: \\`PENDING\\`, \\`RUNNING\\`, \\`SUCCESSED\\`, \\`FAILED\\`, and \\`CANCELED\\`.
   * 
   * @example
   * SUCCESSED
   */
  status?: string;
  /**
   * @remarks
   * The total runtime in milliseconds.
   * 
   * @example
   * 1000
   */
  rt?: number;
  /**
   * @remarks
   * The token usage. The possible billable items are:
   * quanmiaoMax, quanmiaoPlus
   */
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
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetCustomSourceTopicAnalysisTaskResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\` indicates success and \\`false\\` indicates failure.
   * 
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

