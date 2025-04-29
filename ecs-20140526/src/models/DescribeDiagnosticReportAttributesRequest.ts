// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticReportAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the diagnostic report. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * This parameter is required.
   * 
   * @example
   * dr-i-uf6i0tv2refv8wz*****
   */
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

