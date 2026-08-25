// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service-linked role has been created.
   * 
   * @example
   * False
   */
  hasServiceLinkedRole?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1F455133-981E-5AD0-80EB-26EA1EF3C65F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hasServiceLinkedRole: 'HasServiceLinkedRole',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasServiceLinkedRole: 'boolean',
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

