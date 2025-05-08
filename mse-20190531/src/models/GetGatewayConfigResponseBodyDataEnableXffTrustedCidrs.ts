// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayConfigResponseBodyDataEnableXffTrustedCidrs extends $dara.Model {
  enable?: boolean;
  ipListContent?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      ipListContent: 'IpListContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      ipListContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

