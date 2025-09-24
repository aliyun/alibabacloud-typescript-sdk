// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostUnitResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 23453245
   */
  ownerUid?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 235325
   */
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      pageNum: 'number',
      pageSize: 'number',
      unitId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

