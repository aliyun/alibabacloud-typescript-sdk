// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDiagnosticReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the diagnostic reports. You can specify up to 100 resource IDs.
   * 
   * This parameter is required.
   */
  reportIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      reportIds: 'ReportIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      reportIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.reportIds)) {
      $dara.Model.validateArray(this.reportIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

