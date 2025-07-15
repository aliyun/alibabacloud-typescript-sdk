// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyLiveDomainOwnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The verification information.
   * 
   * @example
   * verify_dffeb6610035dcb77b413******
   */
  content?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1BA6D7CE-55F1-5926-8764-F8663473AD0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

