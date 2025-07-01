// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSmbAclResponseBodyAcl } from "./DescribeSmbAclResponseBodyAcl";


export class DescribeSmbAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ACL feature.
   */
  acl?: DescribeSmbAclResponseBodyAcl;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
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
      acl: DescribeSmbAclResponseBodyAcl,
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

