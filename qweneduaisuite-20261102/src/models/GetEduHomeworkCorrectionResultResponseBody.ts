// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEduHomeworkCorrectionResultResponseBodyDataQuestionResultsAnswerResultsAnswerPoints extends $dara.Model {
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

export class GetEduHomeworkCorrectionResultResponseBodyDataQuestionResultsAnswerResultsCheckPoint extends $dara.Model {
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

export class GetEduHomeworkCorrectionResultResponseBodyDataQuestionResultsAnswerResults extends $dara.Model {
  /**
   * @remarks
   * The coordinate group of the user\\"s answering area. It generally contains four vertex coordinate values, arranged in the order of top-left, top-right, bottom-right, and bottom-left, such as `[{"x": ..., "y": ...}, ...]`.
   */
  answerPoints?: GetEduHomeworkCorrectionResultResponseBodyDataQuestionResultsAnswerResultsAnswerPoints[];
  /**
   * @remarks
   * The coordinates of the grading mark point, such as `{ "x": ..., "y": ... }`.
   */
  checkPoint?: GetEduHomeworkCorrectionResultResponseBodyDataQuestionResultsAnswerResultsCheckPoint;
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
   * 120
   */
  standardAnswer?: string;
  /**
   * @remarks
   * The student\\"s answer.
   * 
   * @example
   * 980
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
      answerPoints: { 'type': 'array', 'itemType': GetEduHomeworkCorrectionResultResponseBodyDataQuestionResultsAnswerResultsAnswerPoints },
      checkPoint: GetEduHomeworkCorrectionResultResponseBodyDataQuestionResultsAnswerResultsCheckPoint,
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

export class GetEduHomeworkCorrectionResultResponseBodyDataQuestionResultsQuestionPoints extends $dara.Model {
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

export class GetEduHomeworkCorrectionResultResponseBodyDataQuestionResults extends $dara.Model {
  /**
   * @remarks
   * The array of answering and grading results for the question. For more information, see the following table.
   */
  answerResults?: GetEduHomeworkCorrectionResultResponseBodyDataQuestionResultsAnswerResults[];
  /**
   * @remarks
   * Indicates whether the task is finished:
   * 
   * - **true**: The task is finished.
   * - **false**: The task is not finished.
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
   * The coordinate group of the question area. It generally contains four vertex coordinate values, arranged in the order of top-left, top-right, bottom-right, and bottom-left.
   * 
   * @example
   * `[[{"x": 120, "y": 980}, ...]]`
   */
  questionPoints?: GetEduHomeworkCorrectionResultResponseBodyDataQuestionResultsQuestionPoints[][];
  /**
   * @remarks
   * The question type.
   * 
   * @example
   * Multiple-choice question, applied subjective question, problem-solving question, calculation question, etc
   */
  questionType?: string;
  /**
   * @remarks
   * The question analysis or solution.
   * 
   * @example
   * Question analysis or solution
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
      answerResults: { 'type': 'array', 'itemType': GetEduHomeworkCorrectionResultResponseBodyDataQuestionResultsAnswerResults },
      finish: 'boolean',
      questionContent: 'string',
      questionId: 'string',
      questionPoints: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': GetEduHomeworkCorrectionResultResponseBodyDataQuestionResultsQuestionPoints } },
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

export class GetEduHomeworkCorrectionResultResponseBodyData extends $dara.Model {
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
   * The URL of the dewarped image. If dewarp is set to false, the URL of the original image is returned.
   * 
   * @example
   * https://example.com/dewarp.jpg
   */
  dewarpUrl?: string;
  /**
   * @remarks
   * The array of question recognition and grading results. For more information, see the following table.
   */
  questionResults?: GetEduHomeworkCorrectionResultResponseBodyDataQuestionResults[];
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * submitted, processing, finished, or failed
   */
  status?: string;
  /**
   * @remarks
   * The unique identifier of the task.
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
      questionResults: { 'type': 'array', 'itemType': GetEduHomeworkCorrectionResultResponseBodyDataQuestionResults },
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

export class GetEduHomeworkCorrectionResultResponseBody extends $dara.Model {
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
   * The business data. This field is usually empty when the task fails.
   * 
   * @example
   * {
   *   "request_id": "req-20261116-0001",
   *   "code": "SUCCESS",
   *   "message": "success",
   *   "data": {
   *     "task_id": "task-20261116-abc123",
   *     "status": "finished",
   *     "course": "math",
   *     "dewarp_url": "https://example.com/dewarp.jpg",
   *     "angle": 0,
   *     "render_url": "https://example.com/render.jpg",
   *     "question_results": [
   *       {
   *         "question_id": "q-001",
   *         "question_type": "choice",
   *         "question_content": "1 + 1 = ?",
   *         "question_points": [
   *           [
   *             {"x": 100, "y": 100},
   *             {"x": 200, "y": 100},
   *             {"x": 200, "y": 150},
   *             {"x": 100, "y": 150}
   *           ]
   *         ],
   *         "finish": true,
   *         "answer_results": [
   *           {
   *             "check_result": "correct",
   *             "check_point": {"x": 150, "y": 125},
   *             "answer_points": [
   *               {"x": 120, "y": 120},
   *               {"x": 180, "y": 120},
   *               {"x": 180, "y": 130},
   *               {"x": 120, "y": 130}
   *             ],
   *             "user_answer": "2",
   *             "standard_answer": "2"
   *           }
   *         ],
   *         "solution": "1 + 1 = 2"
   *       }
   *     ],
   *     "usage": {
   *       "prompt_tokens": 1000,
   *       "completion_tokens": 200,
   *       "total_tokens": 1200
   *     }
   *   }
   * }
   */
  data?: GetEduHomeworkCorrectionResultResponseBodyData;
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
   * The request ID, which can be used for troubleshooting.
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
      data: GetEduHomeworkCorrectionResultResponseBodyData,
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

