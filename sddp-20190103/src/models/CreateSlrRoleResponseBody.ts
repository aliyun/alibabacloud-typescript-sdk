// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSlrRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service-linked role was created. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  hasPermission?: boolean;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 208B016D-4CB9-4A85-96A5-0B8ED1EBF271
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hasPermission: 'HasPermission',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPermission: 'boolean',
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

