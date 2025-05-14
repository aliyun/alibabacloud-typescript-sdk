// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserKubeConfigStatesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * *   Valid values: ≥ 1.
   * *   Default value: 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Value values: 1 to 100.
   * *   Default value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

