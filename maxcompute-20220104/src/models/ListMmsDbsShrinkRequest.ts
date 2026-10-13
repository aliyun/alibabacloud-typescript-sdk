// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDbsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * demo
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting conditions.
   */
  sorterShrink?: string;
  /**
   * @remarks
   * The status of the data source.
   * 
   * @example
   * STARTED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      sorterShrink: 'sorter',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sorterShrink: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

