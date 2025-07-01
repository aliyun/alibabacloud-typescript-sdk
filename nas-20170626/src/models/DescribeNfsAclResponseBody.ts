// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNfsAclResponseBodyAcl } from "./DescribeNfsAclResponseBodyAcl";


export class DescribeNfsAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ACL feature.
   */
  acl?: DescribeNfsAclResponseBodyAcl;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1098673-1746-505E-A5F1-08527B7EDBDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: DescribeNfsAclResponseBodyAcl,
      requestId: 'string',
    };
  }

  validate() {
    if(this.acl && typeof (this.acl as any).validate === 'function') {
      (this.acl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

