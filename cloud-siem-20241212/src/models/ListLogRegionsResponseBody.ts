// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of log storage region IDs.
   */
  logRegions?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logRegions: 'LogRegions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRegions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logRegions)) {
      $dara.Model.validateArray(this.logRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

