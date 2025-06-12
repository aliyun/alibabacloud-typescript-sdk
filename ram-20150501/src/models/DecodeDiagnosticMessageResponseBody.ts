// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessage } from "./DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessage";


export class DecodeDiagnosticMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The decoded diagnostic information.
   */
  decodedDiagnosticMessage?: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D2331703-AADF-5564-BA9B-26CD51A33BA0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      decodedDiagnosticMessage: 'DecodedDiagnosticMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decodedDiagnosticMessage: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.decodedDiagnosticMessage && typeof (this.decodedDiagnosticMessage as any).validate === 'function') {
      (this.decodedDiagnosticMessage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

