// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyVsDomainOwnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The verification content.
   * 
   * > 
   * This parameter is not returned if the call is successful. If the call fails, the verification content is returned.
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
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

