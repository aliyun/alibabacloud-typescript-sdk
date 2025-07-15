// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudesViewPointsOutlines extends $dara.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudesViewPoints extends $dara.Model {
  outlines?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudesViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudesViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudes extends $dara.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  viewPoints?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudesViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      ratio: 'Ratio',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      ratio: 'string',
      viewPoints: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudesViewPoints },
    };
  }

  validate() {
    if(Array.isArray(this.viewPoints)) {
      $dara.Model.validateArray(this.viewPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesNews extends $dara.Model {
  content?: string;
  createTime?: string;
  /**
   * @example
   * 9957175DEDCF49C5ACF7A956B4FD67B2
   */
  docId?: string;
  /**
   * @example
   * 123456
   */
  docUuid?: string;
  /**
   * @example
   * https://www.example.com/aaa.png
   */
  imageUrls?: string[];
  pubTime?: string;
  source?: string;
  summary?: string;
  /**
   * @example
   * ["标签1","标签2"]
   */
  tags?: string[];
  title?: string;
  /**
   * @example
   * 文章主题
   */
  topic?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      docId: 'DocId',
      docUuid: 'DocUuid',
      imageUrls: 'ImageUrls',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      topic: 'Topic',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      docId: 'string',
      docUuid: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      topic: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesViewPointsOutlines extends $dara.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesViewPoints extends $dara.Model {
  outlines?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudes extends $dara.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  news?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesNews[];
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  viewPoints?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      news: 'News',
      ratio: 'Ratio',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      news: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesNews },
      ratio: 'string',
      viewPoints: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesViewPoints },
    };
  }

  validate() {
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    if(Array.isArray(this.viewPoints)) {
      $dara.Model.validateArray(this.viewPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResult extends $dara.Model {
  attitudes?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudes[];
  static names(): { [key: string]: string } {
    return {
      attitudes: 'Attitudes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitudes: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudes },
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

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudesViewPointsOutlines extends $dara.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudesViewPoints extends $dara.Model {
  outlines?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudesViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudesViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudes extends $dara.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  /**
   * @example
   * 2024-01-22 10:29
   */
  pubTime?: string;
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  /**
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * http://www.example.com/news/1.html
   */
  url?: string;
  viewPoints?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudesViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      pubTime: 'PubTime',
      ratio: 'Ratio',
      source: 'Source',
      title: 'Title',
      url: 'Url',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      pubTime: 'string',
      ratio: 'string',
      source: 'string',
      title: 'string',
      url: 'string',
      viewPoints: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudesViewPoints },
    };
  }

  validate() {
    if(Array.isArray(this.viewPoints)) {
      $dara.Model.validateArray(this.viewPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResult extends $dara.Model {
  attitudes?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudes[];
  static names(): { [key: string]: string } {
    return {
      attitudes: 'Attitudes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitudes: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudes },
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

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummariesDocList extends $dara.Model {
  source?: string;
  title?: string;
  /**
   * @example
   * http://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
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

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummaries extends $dara.Model {
  docList?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummariesDocList[];
  /**
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docList: 'DocList',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docList: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummariesDocList },
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docList)) {
      $dara.Model.validateArray(this.docList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResult extends $dara.Model {
  summaries?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummaries[];
  static names(): { [key: string]: string } {
    return {
      summaries: 'Summaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaries: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummaries },
    };
  }

  validate() {
    if(Array.isArray(this.summaries)) {
      $dara.Model.validateArray(this.summaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesComments extends $dara.Model {
  /**
   * @example
   * 来源
   */
  source?: string;
  /**
   * @example
   * 评论内容
   */
  text?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * 当前评论所属的URL
   */
  url?: string;
  /**
   * @example
   * 评论用户名
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      text: 'Text',
      title: 'Title',
      url: 'Url',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      text: 'string',
      title: 'string',
      url: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesViewPointsOutlines extends $dara.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesViewPoints extends $dara.Model {
  outlines?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudes extends $dara.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  comments?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesComments[];
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  viewPoints?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      comments: 'Comments',
      ratio: 'Ratio',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      comments: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesComments },
      ratio: 'string',
      viewPoints: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesViewPoints },
    };
  }

  validate() {
    if(Array.isArray(this.comments)) {
      $dara.Model.validateArray(this.comments);
    }
    if(Array.isArray(this.viewPoints)) {
      $dara.Model.validateArray(this.viewPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResult extends $dara.Model {
  attitudes?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudes[];
  static names(): { [key: string]: string } {
    return {
      attitudes: 'Attitudes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitudes: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudes },
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

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  freshViewPointsResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResult;
  hotViewPointsResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResult;
  /**
   * @example
   * SUSPENDED
   */
  status?: string;
  timedViewPointsResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResult;
  /**
   * @example
   * 热点主题事件
   */
  topic?: string;
  topicSummaryResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResult;
  webReviewPointsResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      freshViewPointsResult: 'FreshViewPointsResult',
      hotViewPointsResult: 'HotViewPointsResult',
      status: 'Status',
      timedViewPointsResult: 'TimedViewPointsResult',
      topic: 'Topic',
      topicSummaryResult: 'TopicSummaryResult',
      webReviewPointsResult: 'WebReviewPointsResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      freshViewPointsResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResult,
      hotViewPointsResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResult,
      status: 'string',
      timedViewPointsResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResult,
      topic: 'string',
      topicSummaryResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResult,
      webReviewPointsResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResult,
    };
  }

  validate() {
    if(this.freshViewPointsResult && typeof (this.freshViewPointsResult as any).validate === 'function') {
      (this.freshViewPointsResult as any).validate();
    }
    if(this.hotViewPointsResult && typeof (this.hotViewPointsResult as any).validate === 'function') {
      (this.hotViewPointsResult as any).validate();
    }
    if(this.timedViewPointsResult && typeof (this.timedViewPointsResult as any).validate === 'function') {
      (this.timedViewPointsResult as any).validate();
    }
    if(this.topicSummaryResult && typeof (this.topicSummaryResult as any).validate === 'function') {
      (this.topicSummaryResult as any).validate();
    }
    if(this.webReviewPointsResult && typeof (this.webReviewPointsResult as any).validate === 'function') {
      (this.webReviewPointsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyData;
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
      data: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyData,
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

