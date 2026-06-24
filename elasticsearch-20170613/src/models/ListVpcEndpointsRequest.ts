// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the list.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Default value: 20.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

