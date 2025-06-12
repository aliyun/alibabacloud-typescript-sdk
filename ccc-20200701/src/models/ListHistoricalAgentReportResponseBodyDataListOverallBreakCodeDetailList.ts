// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalAgentReportResponseBodyDataListOverallBreakCodeDetailList extends $dara.Model {
  breakCode?: string;
  count?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      count: 'Count',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      count: 'number',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

