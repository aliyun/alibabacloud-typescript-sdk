// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnosticMetricSetRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the diagnostic metric set.
   * 
   * @example
   * The ID of the request.
   */
  description?: string;
  /**
   * @remarks
   * The IDs of diagnostic metrics. You can specify up to 100 diagnostic metric IDs.
   * 
   * This parameter is required.
   */
  metricIds?: string[];
  /**
   * @remarks
   * The name of the diagnostic metric set.
   * 
   * @example
   * The IDs of diagnostic metrics. You can specify up to 100 diagnostic metric IDs.
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
   * The type of the resource.
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

