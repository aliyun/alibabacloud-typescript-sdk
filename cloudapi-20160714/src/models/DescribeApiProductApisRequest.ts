// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiProductApisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API product.
   * 
   * This parameter is required.
   * 
   * @example
   * 117b7a64a8b3f064eaa4a47ac62aac5e
   */
  apiProductId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiProductId: 'ApiProductId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProductId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

