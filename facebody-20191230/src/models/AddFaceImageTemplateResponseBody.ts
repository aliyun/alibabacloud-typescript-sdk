// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFaceImageTemplateResponseBodyDataFaceInfosFaceRect extends $dara.Model {
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

export class AddFaceImageTemplateResponseBodyDataFaceInfos extends $dara.Model {
  faceRect?: AddFaceImageTemplateResponseBodyDataFaceInfosFaceRect;
  /**
   * @example
   * string 6cd509ea-54fa-4730-8e9d-c94cadcda048_0
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
      faceRect: AddFaceImageTemplateResponseBodyDataFaceInfosFaceRect,
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

export class AddFaceImageTemplateResponseBodyData extends $dara.Model {
  faceInfos?: AddFaceImageTemplateResponseBodyDataFaceInfos[];
  /**
   * @example
   * 6cd509ea-54fa-4730-8e9d-c94cadcda048
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      faceInfos: 'FaceInfos',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceInfos: { 'type': 'array', 'itemType': AddFaceImageTemplateResponseBodyDataFaceInfos },
      templateId: 'string',
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

export class AddFaceImageTemplateResponseBody extends $dara.Model {
  data?: AddFaceImageTemplateResponseBodyData;
  /**
   * @example
   * 798A721D-7C7F-4D87-A125-1D04B3055C2C
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
      data: AddFaceImageTemplateResponseBodyData,
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

