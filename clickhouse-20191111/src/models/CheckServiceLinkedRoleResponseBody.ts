// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service-linked role exists.
   * 
   * @example
   * true
   */
  hasServiceLinkedRole?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66428721-xxxx-xxxx-xxxx-3BD1B67837E0
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

