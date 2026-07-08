// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudesViewPointsOutlines extends $dara.Model {
  /**
   * @remarks
   * Outline
   * 
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @remarks
   * Outline summary
   * 
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

export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudesViewPoints extends $dara.Model {
  /**
   * @remarks
   * Outline
   */
  outlines?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudesViewPointsOutlines[];
  /**
   * @remarks
   * Generated perspective
   * 
   * @example
   * 视角
   */
  point?: string;
  /**
   * @remarks
   * Summary
   * 
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
      outlines: { 'type': 'array', 'itemType': GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudesViewPointsOutlines },
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

export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudes extends $dara.Model {
  /**
   * @remarks
   * Current viewpoint
   * 
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @remarks
   * Viewpoint type
   * 
   * @example
   * 观点类型
   */
  attitudeType?: string;
  /**
   * @remarks
   * Proportion of the current viewpoint
   * 
   * @example
   * 当前观点占比
   */
  ratio?: string;
  /**
   * @remarks
   * List of topic selection perspectives
   */
  viewPoints?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudesViewPoints[];
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
      viewPoints: { 'type': 'array', 'itemType': GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudesViewPoints },
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

export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResult extends $dara.Model {
  /**
   * @remarks
   * List of custom viewpoints. By default, the system generates one viewpoint based on the prompt input.
   */
  attitudes?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudes[];
  /**
   * @remarks
   * Hot topic event
   * 
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

export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Result of the custom topic selection analysis task
   */
  customViewPointsResult?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResult;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * Task status (PENDING: pending, RUNNING: running, SUCCESSED: succeeded, SUSPENDED: suspended, FAILED: failed, CANCELED: canceled)
   * 
   * @example
   * FAILED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      customViewPointsResult: 'CustomViewPointsResult',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customViewPointsResult: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResult,
      errorMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.customViewPointsResult && typeof (this.customViewPointsResult as any).validate === 'function') {
      (this.customViewPointsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error description
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates success: true for success, false for failure
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
      data: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyData,
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

