// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceVideoTemplateResponseBodyDataElementsFaceInfos extends $dara.Model {
  templateFaceID?: string;
  templateFaceURL?: string;
  static names(): { [key: string]: string } {
    return {
      templateFaceID: 'TemplateFaceID',
      templateFaceURL: 'TemplateFaceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateFaceID: 'string',
      templateFaceURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceVideoTemplateResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * 2021-09-06 15:17:19
   */
  createTime?: string;
  faceInfos?: QueryFaceVideoTemplateResponseBodyDataElementsFaceInfos[];
  /**
   * @example
   * 3bf2418c-7adf-4002-a9d6-2f7cf1889c0d
   */
  templateId?: string;
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/image-face-fusion/OriginUrl/user/2021-09-06/e4d6ecf6-8dc8-4dac-acb5-56a737ccbc06?Expires=1630914551&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=kBcLm66y7%2FZ3eIMgwXJg1zNP7k****
   */
  templateURL?: string;
  /**
   * @example
   * 2021-09-06 15:18:15
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
      faceInfos: { 'type': 'array', 'itemType': QueryFaceVideoTemplateResponseBodyDataElementsFaceInfos },
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

export class QueryFaceVideoTemplateResponseBodyData extends $dara.Model {
  elements?: QueryFaceVideoTemplateResponseBodyDataElements[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': QueryFaceVideoTemplateResponseBodyDataElements },
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

export class QueryFaceVideoTemplateResponseBody extends $dara.Model {
  data?: QueryFaceVideoTemplateResponseBodyData;
  /**
   * @example
   * A06E3D21-890D-500B-97DA-D8B99D2DDDC4
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
      data: QueryFaceVideoTemplateResponseBodyData,
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

