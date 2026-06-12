// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListS3IngestionsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * test
   */
  logstore?: string;
  /**
   * @remarks
   * The starting position of the results to return. The default value is 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of rows per page for a paged query.
   * 
   * @example
   * 100
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

