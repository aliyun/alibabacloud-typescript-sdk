// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserSlsLogRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The region IDs.
   */
  logRegions?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9D11AC3A-A10C-56E7-A342-E87EC892****
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

