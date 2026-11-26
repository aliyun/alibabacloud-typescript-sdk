// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * Xspace commercialization service
   */
  name?: string;
  /**
   * @remarks
   * The current page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

