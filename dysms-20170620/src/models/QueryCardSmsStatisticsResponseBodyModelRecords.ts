// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsStatisticsResponseBodyModelRecords extends $dara.Model {
  renderSuccessTotal?: number;
  sendDate?: string;
  signName?: string;
  tmpCode?: string;
  tmpName?: string;
  urlGenerateTotal?: number;
  static names(): { [key: string]: string } {
    return {
      renderSuccessTotal: 'RenderSuccessTotal',
      sendDate: 'SendDate',
      signName: 'SignName',
      tmpCode: 'TmpCode',
      tmpName: 'TmpName',
      urlGenerateTotal: 'UrlGenerateTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderSuccessTotal: 'number',
      sendDate: 'string',
      signName: 'string',
      tmpCode: 'string',
      tmpName: 'string',
      urlGenerateTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

