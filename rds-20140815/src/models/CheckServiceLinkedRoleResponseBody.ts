// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an SLR is created.
   * 
   * @example
   * true
   */
  hasServiceLinkedRole?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AB44DC0A-7E77-442A-97A9-C6418694CB22
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the service-linked role is required. Default value: true.
   * 
   * @example
   * true
   */
  requireServiceLinkedRole?: string;
  static names(): { [key: string]: string } {
    return {
      hasServiceLinkedRole: 'HasServiceLinkedRole',
      requestId: 'RequestId',
      requireServiceLinkedRole: 'RequireServiceLinkedRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasServiceLinkedRole: 'string',
      requestId: 'string',
      requireServiceLinkedRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

