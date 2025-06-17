// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnReportListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the operations report that you want to query. If you do not specify an ID, all operations reports are queried.
   * 
   * @example
   * 1
   */
  reportId?: number;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

