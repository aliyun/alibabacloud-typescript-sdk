// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosticReportRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. This parameter takes effect only for diagnostic metrics that do not need to be assessed by running Cloud Assistant commands in guest operating systems.
   * 
   * @example
   * 2022-07-11T14:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the diagnostic metric set. If this parameter is left empty, the dms-instancedefault set is used, which is the default diagnostic metric set provided for Elastic Compute Service (ECS) instances.
   * 
   * @example
   * dms-uf6i0tv2refv8wz*****
   */
  metricSetId?: string;
  /**
   * @remarks
   * The region ID of the security group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of resource N.
   * 
   * This parameter is required.
   * 
   * @example
   * i-uf6i0tv2refv8wz*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The start time. This parameter takes effect only for diagnostic metrics that do not need to be assessed by running Cloud Assistant commands in guest operating systems.
   * 
   * @example
   * 2022-07-11T12:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      metricSetId: 'MetricSetId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      metricSetId: 'string',
      regionId: 'string',
      resourceId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

