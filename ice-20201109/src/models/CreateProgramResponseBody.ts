// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChannelAssemblyProgram } from "./ChannelAssemblyProgram";


export class CreateProgramResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the program.
   */
  program?: ChannelAssemblyProgram;
  /**
   * @remarks
   * **Request ID**
   * 
   * @example
   * xxx-xxxx-xxxxx-xxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      program: 'Program',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      program: ChannelAssemblyProgram,
      requestId: 'string',
    };
  }

  validate() {
    if(this.program && typeof (this.program as any).validate === 'function') {
      (this.program as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

