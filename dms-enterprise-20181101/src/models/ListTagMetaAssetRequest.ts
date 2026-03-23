// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagMetaAssetRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  metaParentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * META_DATABASE
   */
  metaType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * test
   */
  searchKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sys::DMS-DA::cn-hangzhou::space:abcde
   */
  tagName?: string;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      metaParentId: 'MetaParentId',
      metaType: 'MetaType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      tagName: 'TagName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaParentId: 'string',
      metaType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      tagName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

