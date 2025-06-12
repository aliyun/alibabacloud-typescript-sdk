// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecodeDiagnosticMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The encoded diagnostic information in the response that contains an access denied error. The error is caused by no RAM permissions.
   * 
   * @example
   * AQEAAAAAZBgxr0U1MjA1NTM1LUM4BBktMzE5RS1CODgxLUU1QTI0RDNFQTM1****
   */
  encodedDiagnosticMessage?: string;
  static names(): { [key: string]: string } {
    return {
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodedDiagnosticMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

