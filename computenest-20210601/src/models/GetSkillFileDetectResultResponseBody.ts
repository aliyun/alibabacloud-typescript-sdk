// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillFileDetectResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 8cfb1102cc5f56fe752f6e9b8c6f7f3d
   */
  hashKey?: string;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3F976EF8-C10A-57DC-917C-BB7BEB508FFB
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  result?: number;
  /**
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

