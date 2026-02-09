// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsFirstBbsTicketRequest extends $dara.Model {
  cna?: string;
  distributionChannel?: string;
  referrer?: string;
  subDistributionChannel?: string;
  XGatewayExtendInfo?: string;
  static names(): { [key: string]: string } {
    return {
      cna: 'Cna',
      distributionChannel: 'DistributionChannel',
      referrer: 'Referrer',
      subDistributionChannel: 'SubDistributionChannel',
      XGatewayExtendInfo: 'XGatewayExtendInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cna: 'string',
      distributionChannel: 'string',
      referrer: 'string',
      subDistributionChannel: 'string',
      XGatewayExtendInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

