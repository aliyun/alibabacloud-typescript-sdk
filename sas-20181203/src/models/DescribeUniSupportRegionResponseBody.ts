// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniSupportRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D0760****
   */
  requestId?: string;
  /**
   * @remarks
   * An array consisting of the region that is supported by anti-ransomware for databases.
   */
  uniSupportRegion?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uniSupportRegion: 'UniSupportRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uniSupportRegion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uniSupportRegion)) {
      $dara.Model.validateArray(this.uniSupportRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

