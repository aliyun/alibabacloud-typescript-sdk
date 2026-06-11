// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketPortalDomainConfig extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   */
  domain?: string;
  /**
   * @remarks
   * The domain protocol.
   */
  protocol?: string;
  /**
   * @remarks
   * The domain type.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      protocol: 'protocol',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      protocol: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

