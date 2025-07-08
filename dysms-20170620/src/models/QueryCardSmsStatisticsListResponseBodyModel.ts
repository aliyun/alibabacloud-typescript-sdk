// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsStatisticsListResponseBodyModel extends $dara.Model {
  renderSuccessTotal?: number;
  sendDate?: string;
  urlGenerateTotal?: number;
  static names(): { [key: string]: string } {
    return {
      renderSuccessTotal: 'RenderSuccessTotal',
      sendDate: 'SendDate',
      urlGenerateTotal: 'UrlGenerateTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderSuccessTotal: 'number',
      sendDate: 'string',
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

