// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRDDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Valid values: 1 to 100000.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 20. Valid values: an integer between 1 and 500. Default value: 20.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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

