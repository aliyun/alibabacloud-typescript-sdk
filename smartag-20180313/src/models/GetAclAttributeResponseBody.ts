// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAclAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * @example
   * acl-xhwhyuo43l0n*****
   */
  aclId?: string;
  /**
   * @remarks
   * The name of the ACL.
   * 
   * @example
   * dpi_test
   */
  aclName?: string;
  /**
   * @remarks
   * The number of SAG devices that are associated with the ACL who has DPI configuration errors.
   * 
   * You can call the [ListDpiConfigError](https://help.aliyun.com/document_detail/197566.html) operation to query exception details and SAG device information.
   * 
   * @example
   * 0
   */
  errorConfigSmartAGCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5D2013F0-85AB-4332-9094-8023A598C2C1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      errorConfigSmartAGCount: 'ErrorConfigSmartAGCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      errorConfigSmartAGCount: 'number',
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

