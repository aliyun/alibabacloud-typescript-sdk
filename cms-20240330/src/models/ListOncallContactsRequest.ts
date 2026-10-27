// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOncallContactsRequest extends $dara.Model {
  /**
   * @example
   * 1730183838000
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

