// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GatewayDomain extends $dara.Model {
  certIdentifier?: string;
  gatewayId?: number;
  gatewayName?: string;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  mustHttps?: string;
  name?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mustHttps: 'MustHttps',
      name: 'Name',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      gatewayId: 'number',
      gatewayName: 'string',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      mustHttps: 'string',
      name: 'string',
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

