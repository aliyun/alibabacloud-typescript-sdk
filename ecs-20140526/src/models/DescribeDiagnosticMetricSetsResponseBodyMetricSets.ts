// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticMetricSetsResponseBodyMetricSets extends $dara.Model {
  /**
   * @remarks
   * The description of the diagnostic metric set.
   * 
   * @example
   * connection issue diagnostics
   */
  description?: string;
  /**
   * @remarks
   * The IDs of the diagnostic metrics.
   */
  metricIds?: string[];
  /**
   * @remarks
   * The ID of the diagnostic metric set.
   * 
   * @example
   * dms-bp17p0qwtr72zmu*****
   */
  metricSetId?: string;
  /**
   * @remarks
   * The name of the diagnostic metric set.
   * 
   * @example
   * connection issue diagnostics
   */
  metricSetName?: string;
  /**
   * @remarks
   * The resource type supported by the diagnostic metric set.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The type of the diagnostic metric set. Valid values:
   * 
   * *   User: user-defined diagnostic metric set
   * *   Common: common diagnostic metric set
   * 
   * @example
   * User
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metricIds: 'MetricIds',
      metricSetId: 'MetricSetId',
      metricSetName: 'MetricSetName',
      resourceType: 'ResourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metricIds: { 'type': 'array', 'itemType': 'string' },
      metricSetId: 'string',
      metricSetName: 'string',
      resourceType: 'string',
      type: 'string',
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

