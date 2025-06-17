// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnFullDomainsBlockIPHistoryResponseBodyIPBlockInfo extends $dara.Model {
  /**
   * @remarks
   * The blocked IP address or CIDR block.
   * 
   * @example
   * 1.XXX.XXX.0~1.XXX.XXX.255
   */
  blockIP?: string;
  /**
   * @remarks
   * The delivery time.
   * 
   * @example
   * 2023-04-24 18:49:37
   */
  deliverTime?: string;
  /**
   * @remarks
   * The delivery status.
   * 
   * *   Success
   * *   Failed
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      blockIP: 'BlockIP',
      deliverTime: 'DeliverTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockIP: 'string',
      deliverTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

