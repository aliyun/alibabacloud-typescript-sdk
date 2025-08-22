// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTerraformDestroyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BF72A6FB-B071-5F2E-A036-9D62545B962C
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

