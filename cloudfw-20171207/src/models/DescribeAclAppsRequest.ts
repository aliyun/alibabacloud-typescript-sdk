// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclAppsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  aclType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  popular?: number;
  protocols?: string[];
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      lang: 'Lang',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      popular: 'Popular',
      protocols: 'Protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      lang: 'string',
      pageNo: 'number',
      pageSize: 'number',
      popular: 'number',
      protocols: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

