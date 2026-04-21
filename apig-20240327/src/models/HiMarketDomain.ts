// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketDomain extends $dara.Model {
  domain?: string;
  networkType?: string;
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      networkType: 'networkType',
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      networkType: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

