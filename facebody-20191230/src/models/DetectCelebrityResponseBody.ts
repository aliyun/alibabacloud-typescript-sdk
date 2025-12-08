// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectCelebrityResponseBodyDataFaceRecognizeResults extends $dara.Model {
  /**
   * @remarks
   * 1
   */
  faceBoxes?: number[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      faceBoxes: 'FaceBoxes',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceBoxes: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.faceBoxes)) {
      $dara.Model.validateArray(this.faceBoxes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCelebrityResponseBodyData extends $dara.Model {
  faceRecognizeResults?: DetectCelebrityResponseBodyDataFaceRecognizeResults[];
  /**
   * @example
   * 1000
   */
  height?: number;
  /**
   * @example
   * 1000
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      faceRecognizeResults: 'FaceRecognizeResults',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRecognizeResults: { 'type': 'array', 'itemType': DetectCelebrityResponseBodyDataFaceRecognizeResults },
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.faceRecognizeResults)) {
      $dara.Model.validateArray(this.faceRecognizeResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectCelebrityResponseBody extends $dara.Model {
  data?: DetectCelebrityResponseBodyData;
  /**
   * @example
   * 4E92C0D4-BB0F-4F25-AD13-E87D02FAA205
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
      data: DetectCelebrityResponseBodyData,
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

