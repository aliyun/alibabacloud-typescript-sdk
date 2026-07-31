// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDiagnosticReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of diagnostic report IDs. A maximum of 100 IDs are supported.
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

