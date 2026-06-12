// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillFileDetectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the detection task.
   * 
   * @example
   * 2aceb074-fa72-44d2-99d9-45b17cffe0e7
   */
  hashKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F976EF8-C10A-57DC-917C-BB7BEB508FFB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hashKey: 'HashKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hashKey: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

