// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertsRequest extends $dara.Model {
  /**
   * @remarks
   * The Logstore from which to obtain alert rules. The default value is empty.
   * 
   * @example
   * ali-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The line from which to start the query. The default value is 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of rows to return on each page for a paged query. The maximum value is 200. The default value is 10.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

