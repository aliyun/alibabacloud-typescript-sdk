// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryShareListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the work. The works include data portal, dashboard, spreadsheet, self-service data retrieval, ad-hoc analysis, data entry, and data screen.
   * 
   * This parameter is required.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

