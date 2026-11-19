// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodUserVipsByDomainRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query healthy VIPs. Valid values:
   * 
   * - **on**: Healthy VIPs.
   * - **off**: All VIPs.
   * 
   * @example
   * on
   */
  available?: string;
  /**
   * @remarks
   * The ApsaraVideo VOD accelerated domain name. You can specify only one domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'string',
      domainName: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

