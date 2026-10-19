// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceLinkedRoleExistsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service-linked role has been authorized for the current account. Valid values:
   * 
   * - **true**: Authorized.
   * 
   * - **false**: Not authorized.
   * 
   * @example
   * true
   */
  existsServiceLinkedRole?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90B82DB7-FB28-4CC2-ADBF-1F8659F3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      existsServiceLinkedRole: 'ExistsServiceLinkedRole',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existsServiceLinkedRole: 'boolean',
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

