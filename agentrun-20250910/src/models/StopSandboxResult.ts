// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Sandbox } from "./Sandbox";


export class StopSandboxResult extends $dara.Model {
  /**
   * @remarks
   * Result code
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Details of the code interpreter, including all configuration and status information of the interpreter
   */
  data?: Sandbox;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * F8A0F5F3-0C3E-4C82-9D4F-5E4B6A7C8D9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: Sandbox,
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

