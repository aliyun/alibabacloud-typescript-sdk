// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyDomainOwnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The verification result.
   * 
   * > This parameter is returned only if the operation fails.
   * 
   * @example
   * verify_dffeb6610035dcb77b413a59c32c****
   */
  content?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34AB41F1-04A5-496F-8C8D-634BDBE6A9FB
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

