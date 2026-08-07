// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserDocumentPermissionResponseBody extends $dara.Model {
  /**
   * @example
   * -3
   */
  authLevel?: number;
  /**
   * @example
   * true
   */
  hasPermission?: boolean;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      authLevel: 'authLevel',
      hasPermission: 'hasPermission',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authLevel: 'number',
      hasPermission: 'boolean',
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

