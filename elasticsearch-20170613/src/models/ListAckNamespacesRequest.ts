// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAckNamespacesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. (Deprecated).
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of records per page. (Deprecated).
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

