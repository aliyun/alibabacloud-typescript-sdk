// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * The quota name. Fuzzy search is supported.
   * 
   * @example
   * quota-name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

