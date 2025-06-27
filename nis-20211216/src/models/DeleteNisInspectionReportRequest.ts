// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNisInspectionReportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nir-ffd1af****196d0
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

