// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  external?: boolean;
  static names(): { [key: string]: string } {
    return {
      external: 'external',
    };
  }

  static types(): { [key: string]: any } {
    return {
      external: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

