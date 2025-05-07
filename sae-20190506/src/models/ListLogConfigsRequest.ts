// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * 10
   * 
   * This parameter is required.
   * 
   * @example
   * 56f77b65-788d-442a-9885-7f20d91f****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * 1
   * 
   * This parameter is required.
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

