// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectWhiteBaseImageResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * 0
   */
  whiteBase?: number;
  static names(): { [key: string]: string } {
    return {
      whiteBase: 'WhiteBase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteBase: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWhiteBaseImageResponseBodyData extends $dara.Model {
  elements?: DetectWhiteBaseImageResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectWhiteBaseImageResponseBodyDataElements },
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

export class DetectWhiteBaseImageResponseBody extends $dara.Model {
  data?: DetectWhiteBaseImageResponseBodyData;
  /**
   * @example
   * 7A7F9EEB-44C4-4592-9089-A6185B222B23
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
      data: DetectWhiteBaseImageResponseBodyData,
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

