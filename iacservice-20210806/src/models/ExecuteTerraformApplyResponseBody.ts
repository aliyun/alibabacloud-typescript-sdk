// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTerraformApplyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C896FE0A-1BEA-5D01-BFF4-B03B82B9CA3D
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

