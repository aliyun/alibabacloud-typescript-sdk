// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPagesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Valid values: **1 to 100000**. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query parameters passed in JSON format, which include various filter conditions.
   */
  queryArgsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgsShrink: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      queryArgsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

