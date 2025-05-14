// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveEditingIndexFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL of the index file.
   */
  indexFile?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E84BE44-58A7-****-****-FBEBEA16EF94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      indexFile: 'IndexFile',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexFile: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

