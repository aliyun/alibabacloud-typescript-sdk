// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsStatisticsSendListResponseBodyModel extends $dara.Model {
  renderSuccessRate?: number;
  renderSuccessTotal?: number;
  sendDate?: string;
  sendFailTotal?: number;
  sendProcessTotal?: number;
  sendSuccessRate?: number;
  sendSuccessTotal?: number;
  sendTotal?: number;
  supportRate?: number;
  supportTotal?: number;
  static names(): { [key: string]: string } {
    return {
      renderSuccessRate: 'RenderSuccessRate',
      renderSuccessTotal: 'RenderSuccessTotal',
      sendDate: 'SendDate',
      sendFailTotal: 'SendFailTotal',
      sendProcessTotal: 'SendProcessTotal',
      sendSuccessRate: 'SendSuccessRate',
      sendSuccessTotal: 'SendSuccessTotal',
      sendTotal: 'SendTotal',
      supportRate: 'SupportRate',
      supportTotal: 'SupportTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderSuccessRate: 'number',
      renderSuccessTotal: 'number',
      sendDate: 'string',
      sendFailTotal: 'number',
      sendProcessTotal: 'number',
      sendSuccessRate: 'number',
      sendSuccessTotal: 'number',
      sendTotal: 'number',
      supportRate: 'number',
      supportTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

