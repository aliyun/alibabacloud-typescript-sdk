// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  namePrefix?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      namePrefix: 'namePrefix',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namePrefix: 'string',
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

