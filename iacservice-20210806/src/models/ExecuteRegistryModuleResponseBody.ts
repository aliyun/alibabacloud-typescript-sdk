// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteRegistryModuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 79284133-D4BA-56B3-954C-D538256F7EAA
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

