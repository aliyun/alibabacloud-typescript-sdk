// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryActiveUserCountRequest extends $dara.Model {
  /**
   * @example
   * 2023-01-01
   */
  dataDate?: string;
  static names(): { [key: string]: string } {
    return {
      dataDate: 'DataDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

