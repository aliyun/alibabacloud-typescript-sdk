// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsPartitionsRequestSorter extends $dara.Model {
  /**
   * @example
   * desc
   */
  lastDdlTime?: string;
  /**
   * @example
   * desc
   */
  numRows?: string;
  /**
   * @example
   * asc
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      lastDdlTime: 'lastDdlTime',
      numRows: 'numRows',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastDdlTime: 'string',
      numRows: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

