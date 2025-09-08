// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultimodalModerationResultResponseBodyDataCommentDatasCommentDatasResults extends $dara.Model {
  description?: string;
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
  description?: string;
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
  commentDatas?: DescribeMultimodalModerationResultResponseBodyDataCommentDatasCommentDatas[];
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
  description?: string;
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
  commentDatas?: DescribeMultimodalModerationResultResponseBodyDataCommentDatas[];
  dataId?: string;
  mainData?: DescribeMultimodalModerationResultResponseBodyDataMainData;
  reqId?: string;
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
  code?: number;
  data?: DescribeMultimodalModerationResultResponseBodyData;
  msg?: string;
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

