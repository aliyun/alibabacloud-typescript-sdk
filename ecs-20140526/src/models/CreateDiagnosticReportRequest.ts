// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosticReportRequest extends $dara.Model {
  additionalOptions?: { [key: string]: string };
  /**
   * @remarks
   * The end time. This parameter applies only to diagnostic metrics that do not require running Cloud Assistant commands in the guest OS.
   * 
   * @example
   * 2022-07-11T14:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The diagnostic metric set ID. If this parameter is omitted, the default diagnostic metric set for ECS instances, `dms-instancedefault`, is used.
   * 
   * @example
   * dms-uf6i0tv2refv8wz*****
   */
  metricSetId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to get the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-uf6i0tv2refv8wz*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The start time. This parameter applies only to diagnostic metrics that do not require running Cloud Assistant commands in the guest OS.
   * 
   * @example
   * 2022-07-11T12:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      additionalOptions: 'AdditionalOptions',
      endTime: 'EndTime',
      metricSetId: 'MetricSetId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      endTime: 'string',
      metricSetId: 'string',
      regionId: 'string',
      resourceId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.additionalOptions) {
      $dara.Model.validateMap(this.additionalOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

