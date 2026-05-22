// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommitRoutineStagingCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The version number of the newly generated code.
   * 
   * @example
   * 1710120201067203242
   */
  codeVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeVersion: 'CodeVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersion: 'string',
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

