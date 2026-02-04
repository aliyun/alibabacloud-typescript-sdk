// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceLinkedRoleExistsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service-linked role is created for Tair (Redis OSS-compatible) in the current account. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  existsServiceLinkedRole?: boolean;
  /**
   * @remarks
   * The unique ID of the request.
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

