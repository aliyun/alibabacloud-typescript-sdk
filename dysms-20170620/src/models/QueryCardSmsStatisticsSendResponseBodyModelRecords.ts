// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsStatisticsSendResponseBodyModelRecords extends $dara.Model {
  customTmpCode?: string;
  renderSuccessRate?: number;
  renderSuccessTotal?: number;
  sendDate?: string;
  sendFailTotal?: number;
  sendProcessTotal?: number;
  sendSuccessRate?: number;
  sendSuccessTotal?: number;
  sendTotal?: number;
  signName?: string;
  supportRate?: number;
  supportTotal?: number;
  tmpCode?: string;
  static names(): { [key: string]: string } {
    return {
      customTmpCode: 'CustomTmpCode',
      renderSuccessRate: 'RenderSuccessRate',
      renderSuccessTotal: 'RenderSuccessTotal',
      sendDate: 'SendDate',
      sendFailTotal: 'SendFailTotal',
      sendProcessTotal: 'SendProcessTotal',
      sendSuccessRate: 'SendSuccessRate',
      sendSuccessTotal: 'SendSuccessTotal',
      sendTotal: 'SendTotal',
      signName: 'SignName',
      supportRate: 'SupportRate',
      supportTotal: 'SupportTotal',
      tmpCode: 'TmpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTmpCode: 'string',
      renderSuccessRate: 'number',
      renderSuccessTotal: 'number',
      sendDate: 'string',
      sendFailTotal: 'number',
      sendProcessTotal: 'number',
      sendSuccessRate: 'number',
      sendSuccessTotal: 'number',
      sendTotal: 'number',
      signName: 'string',
      supportRate: 'number',
      supportTotal: 'number',
      tmpCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

