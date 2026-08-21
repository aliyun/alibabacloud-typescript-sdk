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
   * The accelerated domain name for ApsaraVideo VOD. Only a single domain name can be queried.
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

