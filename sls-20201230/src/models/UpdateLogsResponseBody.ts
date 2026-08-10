// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of updated log rows.
   * 
   * @example
   * 10
   */
  affectedRows?: number;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'affectedRows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

