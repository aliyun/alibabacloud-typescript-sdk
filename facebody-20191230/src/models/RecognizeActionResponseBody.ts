// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeActionResponseBodyDataElementsBoxes extends $dara.Model {
  box?: number[];
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.box)) {
      $dara.Model.validateArray(this.box);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionResponseBodyDataElements extends $dara.Model {
  boxes?: RecognizeActionResponseBodyDataElementsBoxes[];
  labels?: string[];
  scores?: number[];
  /**
   * @example
   * 3
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      labels: 'Labels',
      scores: 'Scores',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': RecognizeActionResponseBodyDataElementsBoxes },
      labels: { 'type': 'array', 'itemType': 'string' },
      scores: { 'type': 'array', 'itemType': 'number' },
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.boxes)) {
      $dara.Model.validateArray(this.boxes);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.scores)) {
      $dara.Model.validateArray(this.scores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeActionResponseBodyData extends $dara.Model {
  elements?: RecognizeActionResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeActionResponseBodyDataElements },
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

export class RecognizeActionResponseBody extends $dara.Model {
  data?: RecognizeActionResponseBodyData;
  /**
   * @example
   * E9C40AF5-A7F8-49D5-8A0C-B21F15A07F17
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
      data: RecognizeActionResponseBodyData,
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

