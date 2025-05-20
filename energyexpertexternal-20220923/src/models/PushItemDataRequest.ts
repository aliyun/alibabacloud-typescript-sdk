// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushItemDataRequestItems } from "./PushItemDataRequestItems";


export class PushItemDataRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20210223-01
   */
  code?: string;
  /**
   * @remarks
   * List of data to be pushed.
   * 
   * This parameter is required.
   */
  items?: PushItemDataRequestItems;
  /**
   * @remarks
   * The year of the data created.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024
   */
  year?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: PushItemDataRequestItems,
      year: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

