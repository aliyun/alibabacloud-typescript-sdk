// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddFaceVideoTemplateResponseBodyDateFaceInfos extends $dara.Model {
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

export class AddFaceVideoTemplateResponseBodyDate extends $dara.Model {
  faceInfos?: AddFaceVideoTemplateResponseBodyDateFaceInfos[];
  /**
   * @example
   * 6cd509ea-54fa-4730-8e9d-c94cadcda048
   */
  templateId?: string;
  transResult?: string;
  static names(): { [key: string]: string } {
    return {
      faceInfos: 'FaceInfos',
      templateId: 'TemplateId',
      transResult: 'TransResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceInfos: { 'type': 'array', 'itemType': AddFaceVideoTemplateResponseBodyDateFaceInfos },
      templateId: 'string',
      transResult: 'string',
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

export class AddFaceVideoTemplateResponseBody extends $dara.Model {
  date?: AddFaceVideoTemplateResponseBodyDate;
  message?: string;
  /**
   * @example
   * F61182AE-515B-5B0A-A877-1C9AE908FF15
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: AddFaceVideoTemplateResponseBodyDate,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.date && typeof (this.date as any).validate === 'function') {
      (this.date as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

