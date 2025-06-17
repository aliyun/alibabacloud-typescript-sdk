// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealtimeLogDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name for which real-time log delivery is enabled. You can specify only one domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

