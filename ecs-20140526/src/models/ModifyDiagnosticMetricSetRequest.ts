// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiagnosticMetricSetRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the diagnostic metric set.
   * 
   * @example
   * connection diagnostics
   */
  description?: string;
  /**
   * @remarks
   * The IDs of diagnostic metrics.
   */
  metricIds?: string[];
  /**
   * @remarks
   * The IDs of the diagnostic metric sets.
   * 
   * This parameter is required.
   * 
   * @example
   * dms-uf6i0tv2refv8wz*****
   */
  metricSetId?: string;
  /**
   * @remarks
   * The name of the diagnostic metric set.
   * 
   * @example
   * remoteConnectError
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
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metricIds: 'MetricIds',
      metricSetId: 'MetricSetId',
      metricSetName: 'MetricSetName',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metricIds: { 'type': 'array', 'itemType': 'string' },
      metricSetId: 'string',
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

