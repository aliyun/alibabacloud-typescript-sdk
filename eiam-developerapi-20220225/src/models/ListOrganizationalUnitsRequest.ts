// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationalUnitsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on each page. The default value is 20. The value can range from 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

