// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLayerVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of versions to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The version from which to start the query.
   * 
   * @example
   * 1
   */
  startVersion?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      startVersion: 'startVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      startVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

