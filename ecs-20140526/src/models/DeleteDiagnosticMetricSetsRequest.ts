// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDiagnosticMetricSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of diagnostic metric set IDs. You can specify up to 10 IDs.
   * 
   * This parameter is required.
   */
  metricSetIds?: string[];
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
  static names(): { [key: string]: string } {
    return {
      metricSetIds: 'MetricSetIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricSetIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricSetIds)) {
      $dara.Model.validateArray(this.metricSetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

