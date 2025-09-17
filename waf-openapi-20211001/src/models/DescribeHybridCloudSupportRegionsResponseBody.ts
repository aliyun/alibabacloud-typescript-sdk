// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudSupportRegionsResponseBody extends $dara.Model {
  /**
   * @example
   * 256959D5-3B45-54CD-A66D-F75F11E8E754
   */
  requestId?: string;
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

