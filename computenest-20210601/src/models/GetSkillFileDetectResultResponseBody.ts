// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillFileDetectResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of "200" indicates success. Other values indicate an error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The unique identifier for the detection task.
   * 
   * @example
   * 8cfb1102cc5f56fe752f6e9b8c6f7f3d
   */
  hashKey?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F976EF8-C10A-57DC-917C-BB7BEB508FFB
   */
  requestId?: string;
  /**
   * @remarks
   * The file detection result. Valid values:
   * 
   * 0: safe file
   * 
   * 1: suspicious file
   * 
   * 3: The detection is in progress.
   * 
   * @example
   * 0
   */
  result?: number;
  /**
   * @remarks
   * The file detection score. The score ranges correspond to the following threat levels:
   * 
   * 0–60: safe
   * 
   * 61–70: risk
   * 
   * 71–80: suspicious
   * 
   * 81–100: malicious
   * 
   * @example
   * 10
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hashKey: 'HashKey',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hashKey: 'string',
      message: 'string',
      requestId: 'string',
      result: 'number',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

