// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalAgentSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList extends $dara.Model {
  breakCode?: string;
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * 100
   */
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

