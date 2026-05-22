// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  orderKey?: string;
  orderType?: string;
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      orderKey: 'OrderKey',
      orderType: 'OrderType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      orderKey: 'string',
      orderType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

