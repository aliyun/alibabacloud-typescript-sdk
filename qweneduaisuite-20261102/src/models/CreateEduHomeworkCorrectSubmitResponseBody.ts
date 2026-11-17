// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResultsAnswerPoints extends $dara.Model {
  /**
   * @example
   * 0.0
   */
  x?: number;
  /**
   * @example
   * 0.03
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResultsCheckPoint extends $dara.Model {
  /**
   * @example
   * 0.0
   */
  x?: number;
  /**
   * @example
   * 0.90
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResults extends $dara.Model {
  answerPoints?: CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResultsAnswerPoints[];
  checkPoint?: CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResultsCheckPoint;
  checkResult?: string;
  standardAnswer?: string;
  userAnswer?: string;
  static names(): { [key: string]: string } {
    return {
      answerPoints: 'answerPoints',
      checkPoint: 'checkPoint',
      checkResult: 'checkResult',
      standardAnswer: 'standardAnswer',
      userAnswer: 'userAnswer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerPoints: { 'type': 'array', 'itemType': CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResultsAnswerPoints },
      checkPoint: CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResultsCheckPoint,
      checkResult: 'string',
      standardAnswer: 'string',
      userAnswer: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.answerPoints)) {
      $dara.Model.validateArray(this.answerPoints);
    }
    if(this.checkPoint && typeof (this.checkPoint as any).validate === 'function') {
      (this.checkPoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsQuestionPoints extends $dara.Model {
  /**
   * @example
   * 0.0
   */
  x?: number;
  /**
   * @example
   * 0.0
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResults extends $dara.Model {
  answerResults?: CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResults[];
  /**
   * @example
   * True
   */
  finish?: boolean;
  questionContent?: string;
  questionId?: string;
  questionPoints?: CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsQuestionPoints[][];
  questionType?: string;
  /**
   * @example
   * 已处理：接口耗时已恢复低于阈值（09:53后分钟平均约1.8s～3.3s）
   */
  solution?: string;
  static names(): { [key: string]: string } {
    return {
      answerResults: 'answerResults',
      finish: 'finish',
      questionContent: 'questionContent',
      questionId: 'questionId',
      questionPoints: 'questionPoints',
      questionType: 'questionType',
      solution: 'solution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerResults: { 'type': 'array', 'itemType': CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResults },
      finish: 'boolean',
      questionContent: 'string',
      questionId: 'string',
      questionPoints: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsQuestionPoints } },
      questionType: 'string',
      solution: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.answerResults)) {
      $dara.Model.validateArray(this.answerResults);
    }
    if(Array.isArray(this.questionPoints)) {
      $dara.Model.validateArray(this.questionPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEduHomeworkCorrectSubmitResponseBodyData extends $dara.Model {
  angle?: number;
  dewarpUrl?: string;
  questionResults?: CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResults[];
  /**
   * @example
   * OK
   */
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      angle: 'angle',
      dewarpUrl: 'dewarpUrl',
      questionResults: 'questionResults',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      dewarpUrl: 'string',
      questionResults: { 'type': 'array', 'itemType': CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResults },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.questionResults)) {
      $dara.Model.validateArray(this.questionResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEduHomeworkCorrectSubmitResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CreateEduHomeworkCorrectSubmitResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateEduHomeworkCorrectSubmitResponseBodyData,
      message: 'string',
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

