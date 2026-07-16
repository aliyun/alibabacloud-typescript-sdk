// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultimodalModerationResultResponseBodyDataCommentDatasCommentDatasResults extends $dara.Model {
  /**
   * @remarks
   * Description of the Label field.
   * 
   * @example
   * 疑似含有烟火类内容元素
   */
  description?: string;
  /**
   * @remarks
   * Risk label.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultimodalModerationResultResponseBodyDataCommentDatasCommentDatas extends $dara.Model {
  /**
   * @remarks
   * Comment moderation results.
   */
  results?: DescribeMultimodalModerationResultResponseBodyDataCommentDatasCommentDatasResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': DescribeMultimodalModerationResultResponseBodyDataCommentDatasCommentDatasResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultimodalModerationResultResponseBodyDataCommentDatasResults extends $dara.Model {
  /**
   * @remarks
   * Description of the Label field.
   * 
   * @example
   * 疑似含有烟火类内容元素
   */
  description?: string;
  /**
   * @remarks
   * Risk label.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultimodalModerationResultResponseBodyDataCommentDatas extends $dara.Model {
  /**
   * @remarks
   * Moderation results.
   */
  commentDatas?: DescribeMultimodalModerationResultResponseBodyDataCommentDatasCommentDatas[];
  /**
   * @remarks
   * Comment moderation results.
   */
  results?: DescribeMultimodalModerationResultResponseBodyDataCommentDatasResults[];
  static names(): { [key: string]: string } {
    return {
      commentDatas: 'CommentDatas',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentDatas: { 'type': 'array', 'itemType': DescribeMultimodalModerationResultResponseBodyDataCommentDatasCommentDatas },
      results: { 'type': 'array', 'itemType': DescribeMultimodalModerationResultResponseBodyDataCommentDatasResults },
    };
  }

  validate() {
    if(Array.isArray(this.commentDatas)) {
      $dara.Model.validateArray(this.commentDatas);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultimodalModerationResultResponseBodyDataMainDataResults extends $dara.Model {
  /**
   * @remarks
   * Description of the Label field.
   * 
   * @example
   * 疑似含有烟火类内容元素
   */
  description?: string;
  /**
   * @remarks
   * Risk label.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultimodalModerationResultResponseBodyDataMainData extends $dara.Model {
  /**
   * @remarks
   * Main post moderation results.
   */
  results?: DescribeMultimodalModerationResultResponseBodyDataMainDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': DescribeMultimodalModerationResultResponseBodyDataMainDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultimodalModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Comment moderation results.
   */
  commentDatas?: DescribeMultimodalModerationResultResponseBodyDataCommentDatas[];
  /**
   * @remarks
   * The dataId value passed in the API request. This field is absent if no dataId was provided in the request.
   * 
   * @example
   * data1234
   */
  dataId?: string;
  /**
   * @remarks
   * Main post moderation results.
   */
  mainData?: DescribeMultimodalModerationResultResponseBodyDataMainData;
  /**
   * @remarks
   * The ReqId field returned by the asynchronous moderation API.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  reqId?: string;
  /**
   * @remarks
   * Risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      commentDatas: 'CommentDatas',
      dataId: 'DataId',
      mainData: 'MainData',
      reqId: 'ReqId',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentDatas: { 'type': 'array', 'itemType': DescribeMultimodalModerationResultResponseBodyDataCommentDatas },
      dataId: 'string',
      mainData: DescribeMultimodalModerationResultResponseBodyDataMainData,
      reqId: 'string',
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commentDatas)) {
      $dara.Model.validateArray(this.commentDatas);
    }
    if(this.mainData && typeof (this.mainData as any).validate === 'function') {
      (this.mainData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultimodalModerationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code, which matches the HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeMultimodalModerationResultResponseBodyData;
  /**
   * @remarks
   * The response message for this request.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeMultimodalModerationResultResponseBodyData,
      msg: 'string',
      requestId: 'string',
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

