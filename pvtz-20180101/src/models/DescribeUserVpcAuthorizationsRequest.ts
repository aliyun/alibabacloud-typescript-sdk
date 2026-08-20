// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserVpcAuthorizationsRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * - NORMAL: A regular authorization.
   * 
   * - CLOUD_PRODUCT: An authorization for an Alibaba Cloud service.
   * 
   * @example
   * NORMAL
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the authorized resources.
   * 
   * @example
   * 141339776561****
   */
  authorizedUserId?: number;
  /**
   * @remarks
   * The page number. The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The maximum value is 100. The default value is 20.
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

