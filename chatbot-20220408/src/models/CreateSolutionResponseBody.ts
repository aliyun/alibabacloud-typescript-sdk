// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSolutionResponseBody extends $dara.Model {
  /**
   * @example
   * F55D90C1-31BE-4B2A-AA3F-25EFC36F9419
   */
  requestId?: string;
  /**
   * @example
   * 100001089003
   */
  solutionId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      solutionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

