// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNisInspectionTaskReportsResponseBodyInspectionReportList extends $dara.Model {
  /**
   * @example
   * nir-7c3dd178738a429abe6d
   */
  inspectionReportId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionReportId: 'InspectionReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

