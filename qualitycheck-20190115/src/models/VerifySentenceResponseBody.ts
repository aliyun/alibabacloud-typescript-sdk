// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifySentenceResponseBodyDataDeltaSourceLine extends $dara.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.line)) {
      $dara.Model.validateArray(this.line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaSource extends $dara.Model {
  line?: VerifySentenceResponseBodyDataDeltaSourceLine;
  /**
   * @example
   * 1
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: VerifySentenceResponseBodyDataDeltaSourceLine,
      position: 'number',
    };
  }

  validate() {
    if(this.line && typeof (this.line as any).validate === 'function') {
      (this.line as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaTargetLine extends $dara.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.line)) {
      $dara.Model.validateArray(this.line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaTarget extends $dara.Model {
  line?: VerifySentenceResponseBodyDataDeltaTargetLine;
  /**
   * @example
   * 1
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: VerifySentenceResponseBodyDataDeltaTargetLine,
      position: 'number',
    };
  }

  validate() {
    if(this.line && typeof (this.line as any).validate === 'function') {
      (this.line as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDelta extends $dara.Model {
  source?: VerifySentenceResponseBodyDataDeltaSource;
  target?: VerifySentenceResponseBodyDataDeltaTarget;
  /**
   * @example
   * CHANGE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: VerifySentenceResponseBodyDataDeltaSource,
      target: VerifySentenceResponseBodyDataDeltaTarget,
      type: 'string',
    };
  }

  validate() {
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyData extends $dara.Model {
  delta?: VerifySentenceResponseBodyDataDelta[];
  static names(): { [key: string]: string } {
    return {
      delta: 'Delta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: { 'type': 'array', 'itemType': VerifySentenceResponseBodyDataDelta },
    };
  }

  validate() {
    if(Array.isArray(this.delta)) {
      $dara.Model.validateArray(this.delta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: VerifySentenceResponseBodyData;
  /**
   * @example
   * 2
   */
  incorrectWords?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  sourceRole?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  targetRole?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      incorrectWords: 'IncorrectWords',
      message: 'Message',
      requestId: 'RequestId',
      sourceRole: 'SourceRole',
      success: 'Success',
      targetRole: 'TargetRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: VerifySentenceResponseBodyData,
      incorrectWords: 'number',
      message: 'string',
      requestId: 'string',
      sourceRole: 'number',
      success: 'boolean',
      targetRole: 'number',
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

