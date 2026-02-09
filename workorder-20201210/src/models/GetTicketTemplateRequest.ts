// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  categoryId?: number;
  cna?: string;
  distributionChannel?: string;
  referrer?: string;
  subDistributionChannel?: string;
  XGatewayExtendInfo?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      cna: 'Cna',
      distributionChannel: 'DistributionChannel',
      referrer: 'Referrer',
      subDistributionChannel: 'SubDistributionChannel',
      XGatewayExtendInfo: 'XGatewayExtendInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
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

