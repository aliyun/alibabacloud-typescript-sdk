// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nir-2ca527b8de114ba4afb9
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

