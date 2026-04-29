// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInspectionReportRequest extends $dara.Model {
  /**
   * @example
   * 91bec4c5a168494e8128468e3995df87
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'reportId',
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

