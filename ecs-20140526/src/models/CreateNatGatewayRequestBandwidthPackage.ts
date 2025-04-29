// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayRequestBandwidthPackage extends $dara.Model {
  bandwidth?: number;
  ipCount?: number;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      ipCount: 'IpCount',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      ipCount: 'number',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

