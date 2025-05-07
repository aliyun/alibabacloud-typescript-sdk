// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * d700e680-aa4d-4ec1-afc2-6566b5ff\\*\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * d700e680-aa4d-4ec1-afc2-6566b5ff****
   */
  appId?: string;
  /**
   * @remarks
   * 1
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
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

