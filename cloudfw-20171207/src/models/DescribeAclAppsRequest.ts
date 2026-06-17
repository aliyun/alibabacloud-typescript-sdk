// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The ACL type. Valid values:
   * 
   * - **Internet**
   * 
   * - **NAT**
   * 
   * - **VPC**
   * 
   * - **All**
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  aclType?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the application is common. Valid values:
   * 
   * - **1**: common
   * 
   * - **0**: not common
   * 
   * - If you omit this parameter (the default), all applications are returned.
   * 
   * @example
   * 1
   */
  popular?: number;
  /**
   * @remarks
   * The list of protocol types.
   */
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

