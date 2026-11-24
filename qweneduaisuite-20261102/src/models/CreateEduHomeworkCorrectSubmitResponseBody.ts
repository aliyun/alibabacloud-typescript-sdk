// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResultsAnswerPoints extends $dara.Model {
  /**
   * @remarks
   * The X-axis coordinate value.
   * 
   * @example
   * 120
   */
  x?: number;
  /**
   * @remarks
   * The Y-axis coordinate value.
   * 
   * @example
   * 980
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
   * @remarks
   * The X-axis coordinate.
   * 
   * @example
   * 120
   */
  x?: number;
  /**
   * @remarks
   * The Y-axis coordinate.
   * 
   * @example
   * 980
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
  /**
   * @remarks
   * The coordinate group of the user\\"s answering area. It generally contains four vertex coordinates, arranged in the order of top-left, top-right, bottom-right, and bottom-left, such as `[{"x": ..., "y": ...}, ...]`.
   */
  answerPoints?: CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResultsAnswerPoints[];
  /**
   * @remarks
   * The coordinates of the grading mark point, such as `{ "x": ..., "y": ... }`.
   */
  checkPoint?: CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResultsCheckPoint;
  /**
   * @remarks
   * The grading conclusion, such as `correct`, `wrong`, or `partial`.
   * 
   * @example
   * correct
   */
  checkResult?: string;
  /**
   * @remarks
   * The ground truth.
   * 
   * @example
   * 2
   */
  standardAnswer?: string;
  /**
   * @remarks
   * The student\\"s answer.
   * 
   * @example
   * 2
   */
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
   * @remarks
   * The X-axis coordinate value.
   * 
   * @example
   * 120
   */
  x?: number;
  /**
   * @remarks
   * The Y-axis coordinate value.
   * 
   * @example
   * 980
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
  /**
   * @remarks
   * The array of answering and grading results for the question.
   */
  answerResults?: CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsAnswerResults[];
  /**
   * @remarks
   * Specifies whether the task is completed. Valid values:
   * 
   * - **true**: The task is completed.
   * - **false**: The task is not completed.
   * 
   * @example
   * true
   */
  finish?: boolean;
  /**
   * @remarks
   * The text content of the question.
   * 
   * @example
   * 1 + 1 = ?
   */
  questionContent?: string;
  /**
   * @remarks
   * The question ID.
   * 
   * @example
   * q-001
   */
  questionId?: string;
  /**
   * @remarks
   * The coordinate group of the question area. It generally contains four vertex coordinates, arranged in the order of top-left, top-right, bottom-right, and bottom-left.
   * 
   * @example
   * Example: `[[{"x": 0, "y": 0}, ...]]`
   */
  questionPoints?: CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResultsQuestionPoints[][];
  /**
   * @remarks
   * The question type.
   * 
   * @example
   * choice
   */
  questionType?: string;
  /**
   * @remarks
   * The question analysis and solution.
   * 
   * @example
   * Question analysis and solution
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
  /**
   * @remarks
   * The rotation angle of the image in the clockwise direction, in degrees.
   * 
   * @example
   * 0
   */
  angle?: number;
  /**
   * @remarks
   * The URL of the corrected image. If `dewarp` is set to `false`, the original image is returned.
   * 
   * @example
   * https://example.com/dewarp.jpg
   */
  dewarpUrl?: string;
  /**
   * @remarks
   * The array of question recognition and grading results.
   */
  questionResults?: CreateEduHomeworkCorrectSubmitResponseBodyDataQuestionResults[];
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Examples: submitted, processing, finished, and failed
   */
  status?: string;
  /**
   * @remarks
   * The unique identifier of the task, which must be included in subsequent queries.
   * 
   * @example
   * task-20261116-abc123
   */
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
   * @remarks
   * The API status.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The import command.
   */
  data?: CreateEduHomeworkCorrectSubmitResponseBodyData;
  /**
   * @remarks
   * The request error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID of the caller.
   * 
   * @example
   * req-20261116-0001
   */
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

