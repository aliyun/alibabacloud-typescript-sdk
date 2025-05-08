// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAclsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * nacl-bp1lhl0taikrbgnh****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The name of the network ACL.
   * 
   * @example
   * acl-1
   */
  networkAclName?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the associated instance.
   * 
   * @example
   * n-5****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      networkAclName: 'NetworkAclName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
      networkAclName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

