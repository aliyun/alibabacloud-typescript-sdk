// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
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
   * The number of records to return on each page. The default value is 20. The value must be in the range of 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'organizationalUnitId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
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

