// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 28394563429587
   */
  ownerUid?: number;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. A maximum of 300 entries can be returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent cost center. A value of -1 indicates the root cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  parentUnitId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      parentUnitId: 'ParentUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      pageNum: 'number',
      pageSize: 'number',
      parentUnitId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

