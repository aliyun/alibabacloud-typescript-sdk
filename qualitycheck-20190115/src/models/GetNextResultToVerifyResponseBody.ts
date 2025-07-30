// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine extends $dara.Model {
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

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource extends $dara.Model {
  line?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine;
  /**
   * @example
   * 5
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
      line: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine,
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

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine extends $dara.Model {
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

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget extends $dara.Model {
  line?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine;
  /**
   * @example
   * 5
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
      line: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine,
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

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta extends $dara.Model {
  source?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource;
  target?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget;
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
      source: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource,
      target: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget,
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

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas extends $dara.Model {
  delta?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta[];
  static names(): { [key: string]: string } {
    return {
      delta: 'Delta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: { 'type': 'array', 'itemType': GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta },
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

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogue extends $dara.Model {
  /**
   * @example
   * 980
   */
  begin?: number;
  /**
   * @example
   * XXX
   */
  beginTime?: string;
  deltas?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas;
  /**
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @example
   * 3422
   */
  end?: number;
  /**
   * @example
   * 00:00:07
   */
  hourMinSec?: string;
  identity?: string;
  /**
   * @example
   * 2
   */
  incorrectWords?: number;
  role?: string;
  /**
   * @example
   * 1
   */
  silenceDuration?: number;
  sourceRole?: string;
  sourceWords?: string;
  /**
   * @example
   * 332
   */
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      deltas: 'Deltas',
      emotionValue: 'EmotionValue',
      end: 'End',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      incorrectWords: 'IncorrectWords',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      sourceRole: 'SourceRole',
      sourceWords: 'SourceWords',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      deltas: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas,
      emotionValue: 'number',
      end: 'number',
      hourMinSec: 'string',
      identity: 'string',
      incorrectWords: 'number',
      role: 'string',
      silenceDuration: 'number',
      sourceRole: 'string',
      sourceWords: 'string',
      speechRate: 'number',
      words: 'string',
    };
  }

  validate() {
    if(this.deltas && typeof (this.deltas as any).validate === 'function') {
      (this.deltas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialogues extends $dara.Model {
  dialogue?: GetNextResultToVerifyResponseBodyDataDialoguesDialogue[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: { 'type': 'array', 'itemType': GetNextResultToVerifyResponseBodyDataDialoguesDialogue },
    };
  }

  validate() {
    if(Array.isArray(this.dialogue)) {
      $dara.Model.validateArray(this.dialogue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyData extends $dara.Model {
  /**
   * @example
   * http
   */
  audioScheme?: string;
  /**
   * @example
   * sca-bucket.oss-cn-hangzhou.aliyuncs.com/upload_1173636551461420/dateset_1584674455133_SzC/%E4%BA%BA%E5%B7%A5%E6%A0%A1%E9%AA%8C%E6%B5%8B%E8%AF%95-%E6%9F%A5%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94.wav?Expires=1584847372&amp;OSSAccessKeyId=*****&amp;Signature=HccAKnLOJwoYvzE*********
   */
  audioURL?: string;
  dialogues?: GetNextResultToVerifyResponseBodyDataDialogues;
  /**
   * @example
   * 23421
   */
  duration?: number;
  /**
   * @example
   * e790e6c919d84b82b64ee*****
   */
  fileId?: string;
  /**
   * @example
   * xxx.wav
   */
  fileName?: string;
  /**
   * @example
   * 23
   */
  incorrectWords?: number;
  /**
   * @example
   * 2
   */
  index?: number;
  /**
   * @example
   * 0.97079998
   */
  precision?: number;
  /**
   * @example
   * 3
   */
  status?: number;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @example
   * 2020-03-20T11:26Z
   */
  updateTime?: string;
  /**
   * @example
   * true
   */
  verified?: boolean;
  /**
   * @example
   * 2
   */
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      audioScheme: 'AudioScheme',
      audioURL: 'AudioURL',
      dialogues: 'Dialogues',
      duration: 'Duration',
      fileId: 'FileId',
      fileName: 'FileName',
      incorrectWords: 'IncorrectWords',
      index: 'Index',
      precision: 'Precision',
      status: 'Status',
      totalCount: 'TotalCount',
      updateTime: 'UpdateTime',
      verified: 'Verified',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioScheme: 'string',
      audioURL: 'string',
      dialogues: GetNextResultToVerifyResponseBodyDataDialogues,
      duration: 'number',
      fileId: 'string',
      fileName: 'string',
      incorrectWords: 'number',
      index: 'number',
      precision: 'number',
      status: 'number',
      totalCount: 'number',
      updateTime: 'string',
      verified: 'boolean',
      verifiedCount: 'number',
    };
  }

  validate() {
    if(this.dialogues && typeof (this.dialogues as any).validate === 'function') {
      (this.dialogues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetNextResultToVerifyResponseBodyData;
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
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetNextResultToVerifyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

