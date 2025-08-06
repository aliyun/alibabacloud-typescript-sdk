// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyVodDomainOwnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The verification content.
   * 
   * @example
   * verify_dffeb661*********a59c32cd91f
   */
  content?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E4EBD2BF-5EB0-4476-8829-9D94E1B1****
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

