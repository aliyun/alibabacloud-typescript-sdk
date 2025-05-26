// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIpfilterResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID corresponding to the IP
   * 
   * @example
   * 10795
   */
  ipFilterId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 0E9282E8-DC08-5445-8FB0-B9F0CA28B249
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipFilterId: 'IpFilterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipFilterId: 'string',
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

