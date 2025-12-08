// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceImageTemplateResponseBodyDataElementsFaceInfosFaceRect extends $dara.Model {
  /**
   * @example
   * 94
   */
  height?: string;
  /**
   * @example
   * 89
   */
  width?: string;
  /**
   * @example
   * 254
   */
  x?: string;
  /**
   * @example
   * 318
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'string',
      width: 'string',
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateResponseBodyDataElementsFaceInfos extends $dara.Model {
  faceRect?: QueryFaceImageTemplateResponseBodyDataElementsFaceInfosFaceRect;
  /**
   * @example
   * 6cd509ea-54fa-4730-8e9d-c94cadcda048
   */
  templateFaceID?: string;
  static names(): { [key: string]: string } {
    return {
      faceRect: 'FaceRect',
      templateFaceID: 'TemplateFaceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRect: QueryFaceImageTemplateResponseBodyDataElementsFaceInfosFaceRect,
      templateFaceID: 'string',
    };
  }

  validate() {
    if(this.faceRect && typeof (this.faceRect as any).validate === 'function') {
      (this.faceRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * 2021-01-29 10:19:05
   */
  createTime?: string;
  faceInfos?: QueryFaceImageTemplateResponseBodyDataElementsFaceInfos[];
  /**
   * @example
   * 6cd509ea-54fa-4730-8e9d-c94cadcda048
   */
  templateId?: string;
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/MergeImageFace/MergeImageFace-1.png
   */
  templateURL?: string;
  /**
   * @example
   * 2021-01-29 10:19:05
   */
  updateTime?: string;
  /**
   * @example
   * zhangsan
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      faceInfos: 'FaceInfos',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      faceInfos: { 'type': 'array', 'itemType': QueryFaceImageTemplateResponseBodyDataElementsFaceInfos },
      templateId: 'string',
      templateURL: 'string',
      updateTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.faceInfos)) {
      $dara.Model.validateArray(this.faceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateResponseBodyData extends $dara.Model {
  elements?: QueryFaceImageTemplateResponseBodyDataElements[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': QueryFaceImageTemplateResponseBodyDataElements },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceImageTemplateResponseBody extends $dara.Model {
  data?: QueryFaceImageTemplateResponseBodyData;
  /**
   * @example
   * 7C29675C-751F-4D2F-86FB-2BD8D69AC860
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryFaceImageTemplateResponseBodyData,
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

