// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuggestCategoryRequest extends $dara.Model {
  cna?: string;
  content?: string;
  distributionChannel?: string;
  referrer?: string;
  subDistributionChannel?: string;
  ticketId?: string;
  topN?: number;
  useHotSuggestCatchAll?: boolean;
  XGatewayExtendInfo?: string;
  static names(): { [key: string]: string } {
    return {
      cna: 'Cna',
      content: 'Content',
      distributionChannel: 'DistributionChannel',
      referrer: 'Referrer',
      subDistributionChannel: 'SubDistributionChannel',
      ticketId: 'TicketId',
      topN: 'TopN',
      useHotSuggestCatchAll: 'UseHotSuggestCatchAll',
      XGatewayExtendInfo: 'XGatewayExtendInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cna: 'string',
      content: 'string',
      distributionChannel: 'string',
      referrer: 'string',
      subDistributionChannel: 'string',
      ticketId: 'string',
      topN: 'number',
      useHotSuggestCatchAll: 'boolean',
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

