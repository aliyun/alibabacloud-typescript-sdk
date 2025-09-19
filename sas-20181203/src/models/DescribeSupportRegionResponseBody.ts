// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupportRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 2C0699D3-4107-5A46-A4C4-E129A5967788
   */
  requestId?: string;
  supportRegion?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportRegion: 'SupportRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportRegion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportRegion)) {
      $dara.Model.validateArray(this.supportRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

