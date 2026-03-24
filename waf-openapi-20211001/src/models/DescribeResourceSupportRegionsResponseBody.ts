// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceSupportRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the request ID.
   * 
   * @example
   * 58FDF266-3D56-5DE8-91E0-96A26BAB****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of region IDs supported by transparent proxy mode.
   */
  supportRegions?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportRegions: 'SupportRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportRegions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportRegions)) {
      $dara.Model.validateArray(this.supportRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

