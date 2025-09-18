// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableTokenRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  isInternal?: boolean;
  static names(): { [key: string]: string } {
    return {
      isInternal: 'isInternal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isInternal: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

