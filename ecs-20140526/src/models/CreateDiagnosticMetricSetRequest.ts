// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosticMetricSetRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the diagnostic metric set.
   * 
   * @example
   * Remote connection issue diagnosis
   */
  description?: string;
  /**
   * @remarks
   * The list of diagnostic metrics. A maximum of 100 metrics are supported.
   * 
   * This parameter is required.
   */
  metricIds?: string[];
  /**
   * @remarks
   * The name of the diagnostic metric set.
   * 
   * @example
   * Remote connection issue diagnosis
   */
  metricSetName?: string;
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
   * The resource type.
   * 
   * Default value: instance.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metricIds: 'MetricIds',
      metricSetName: 'MetricSetName',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metricIds: { 'type': 'array', 'itemType': 'string' },
      metricSetName: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricIds)) {
      $dara.Model.validateArray(this.metricIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

