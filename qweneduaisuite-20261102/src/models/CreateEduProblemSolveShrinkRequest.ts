// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEduProblemSolveShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **The question image container.**
   */
  queryShrink?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019F593F-D6EE-5F44-819A-6CDA127D1637
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryShrink: 'query',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryShrink: 'string',
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

