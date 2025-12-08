// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizePublicFaceResponseBodyDataElementsResultsSubResultsFaces extends $dara.Model {
  /**
   * @example
   * AliFace_0006272
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 98.35
   */
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      rate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBodyDataElementsResultsSubResults extends $dara.Model {
  faces?: RecognizePublicFaceResponseBodyDataElementsResultsSubResultsFaces[];
  /**
   * @example
   * 153
   */
  h?: number;
  /**
   * @example
   * 132
   */
  w?: number;
  /**
   * @example
   * 182
   */
  x?: number;
  /**
   * @example
   * 153
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      faces: 'Faces',
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: { 'type': 'array', 'itemType': RecognizePublicFaceResponseBodyDataElementsResultsSubResultsFaces },
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.faces)) {
      $dara.Model.validateArray(this.faces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBodyDataElementsResults extends $dara.Model {
  /**
   * @example
   * sface
   */
  label?: string;
  /**
   * @example
   * 98.35
   */
  rate?: number;
  subResults?: RecognizePublicFaceResponseBodyDataElementsResultsSubResults[];
  /**
   * @example
   * review
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      subResults: 'SubResults',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'number',
      subResults: { 'type': 'array', 'itemType': RecognizePublicFaceResponseBodyDataElementsResultsSubResults },
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subResults)) {
      $dara.Model.validateArray(this.subResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/facebody/xxx.jpg
   */
  imageURL?: string;
  results?: RecognizePublicFaceResponseBodyDataElementsResults[];
  /**
   * @example
   * img3dhYqt1e4wO77Wnf2y@t@E-1tYAEt
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      results: 'Results',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      results: { 'type': 'array', 'itemType': RecognizePublicFaceResponseBodyDataElementsResults },
      taskId: 'string',
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

export class RecognizePublicFaceResponseBodyData extends $dara.Model {
  elements?: RecognizePublicFaceResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizePublicFaceResponseBodyDataElements },
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

export class RecognizePublicFaceResponseBody extends $dara.Model {
  data?: RecognizePublicFaceResponseBodyData;
  /**
   * @example
   * AC4D107C-29E3-4873-A719-0D2217EA28A8
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
      data: RecognizePublicFaceResponseBodyData,
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

