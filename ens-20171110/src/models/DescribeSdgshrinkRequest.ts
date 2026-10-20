// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for paging.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page in a paging query.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the SDGs to query. By default, all SDGs are queried.
   */
  SDGIdsShrink?: string;
  sameDiskId?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SDGIdsShrink: 'SDGIds',
      sameDiskId: 'SameDiskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      SDGIdsShrink: 'string',
      sameDiskId: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

