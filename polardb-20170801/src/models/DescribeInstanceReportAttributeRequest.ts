// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceReportAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance inspection report to query.
   * 
   * @example
   * report-001
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

