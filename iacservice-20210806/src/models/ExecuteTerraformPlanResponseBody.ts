// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTerraformPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0D298375-F92F-5B65-82E4-EA68F02521F1
   */
  requestId?: string;
  /**
   * @example
   * task-xxxx
   */
  stateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      stateId: 'stateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

