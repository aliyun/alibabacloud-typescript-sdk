// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecodeDiagnosticMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The encoded diagnostic information obtained from the `AccessDeniedDetail.EncodedDiagnosticMessage` field in the response body when an API request is denied due to insufficient permissions. This parameter is used to decode the access denied diagnostic information and is required when you call this operation.
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

