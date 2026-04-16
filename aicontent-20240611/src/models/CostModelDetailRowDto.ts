// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CostModelDetailRowDTO extends $dara.Model {
  /**
   * @example
   * 1700000000
   */
  timestamp?: number;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'timestamp',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

