// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclChecksRequest extends $dara.Model {
  /**
   * @remarks
   * The type of ACL check.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  aclType?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

