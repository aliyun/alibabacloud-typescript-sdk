// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectPedestrianResponseBodyDataElements extends $dara.Model {
  /**
   * @remarks
   * 1
   */
  boxes?: number[];
  /**
   * @example
   * 0.999
   */
  score?: number;
  /**
   * @example
   * person
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.boxes)) {
      $dara.Model.validateArray(this.boxes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectPedestrianResponseBodyData extends $dara.Model {
  elements?: DetectPedestrianResponseBodyDataElements[];
  /**
   * @example
   * 599
   */
  height?: number;
  /**
   * @example
   * 899
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectPedestrianResponseBodyDataElements },
      height: 'number',
      width: 'number',
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

export class DetectPedestrianResponseBody extends $dara.Model {
  data?: DetectPedestrianResponseBodyData;
  /**
   * @example
   * 45DBA494-6250-42C4-80D1-7CF19BDD2CB1
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
      data: DetectPedestrianResponseBodyData,
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

