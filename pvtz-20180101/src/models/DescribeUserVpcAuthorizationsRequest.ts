// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserVpcAuthorizationsRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization scope. Valid values:
   * 
   * *   NORMAL: general authorization
   * *   CLOUD_PRODUCT: cloud service-related authorization
   * 
   * @example
   * NORMAL
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the permissions on the resources are granted.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      authorizedUserId: 'AuthorizedUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      authorizedUserId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

